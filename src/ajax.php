<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_before.php");
use Bitrix\Highloadblock as HL;
use Bitrix\Main\Entity;
CModule::IncludeModule('iblock');
CModule::IncludeModule('highloadblock');

if (file_get_contents("php://input")){
    $DATA = file_get_contents("php://input");
}

$currentMonth = ConvertDateTime( date($DB->DateFormatToPHP(CSite::GetDateFormat("SHORT")), time()), "MM", "ru");
$toYear = ConvertDateTime( date($DB->DateFormatToPHP(CSite::GetDateFormat("SHORT")), time()), "YYYY", "ru");
$doYear = $toYear;
$nextMonth = ConvertDateTime( date($DB->DateFormatToPHP(CSite::GetDateFormat("SHORT")), time()), "YYYY", "ru")+1;
if ($currentMonth == 12){
    $nextMonth = "01";
    $doYear = $doYear+1;
}
$iHlBlockId = 3;
$arFilter = [
    "UF_USER_ID" => $USER->getID(),
    ">UF_DATE_CREATE" => "01.".$currentMonth.".".$toYear,
    "<UF_DATE_CREATE" =>  "01.".$nextMonth.".".$doYear,
];

$DATA = json_decode($DATA,true);

if ($DATA["type"] == "addTask"){
    addTask($iHlBlockId,[
       "UF_USER_ID" => 517,
       "UF_TASK_DESCRIPTION"=>$DATA["UF_TASK_DESCRIPTION"],
       "UF_EF_HOURS"=>$DATA["UF_EF_HOURS"],
       "UF_FACT_HOURS"=>$DATA["UF_FACT_HOURS"],
       "UF_DATE_CREATE"=>$DATA["UF_DATE_CREATE"]
    ]);
}

$tasks = getListRowHB($iHlBlockId,$arFilter);
$arResult["tasks"] = $tasks;
echo json_encode($arResult);


function addTask($iHlBlockId,$arFields){
        $obHlblock = HL\HighloadBlockTable::getById($iHlBlockId)->fetch();
        $obEntity = HL\HighloadBlockTable::compileEntity($obHlblock);
        $obEntity_data_class = $obEntity->getDataClass();
        $resultt = $obEntity_data_class::add($arFields);
    return $resultt;
}
function getListRowHB($iHlBlockId,$arFilter)//Работает (получение всех записей HLBlock по его id)
{
    $obHlblock = HL\HighloadBlockTable::getById($iHlBlockId)->fetch();
    $obEntity = HL\HighloadBlockTable::compileEntity($obHlblock);
    $obEntity_data_class = $obEntity->getDataClass();

    $res = $obEntity_data_class::getList(array(
        'select' =>array('*'),
        'order' => array('ID' => 'DESC'),
        'filter'=>$arFilter,//'filter' => array()
    ));
    $arrAllRow =[];
    while($row = $res->fetch())
    {
        $row["UF_DATE_CREATE"] = $row["UF_DATE_CREATE"]->toString();
        $arrAllRow[] = $row;
    }
    return $arrAllRow;
}
import Axios from "axios";

export const axios = Axios.create({
  baseURL: "/api",
  headers: {
    "X-ApiKey": "DecisionPointApiKey",
    Authorization:
      "Basic 4F9A6A34EAA3C33B876ED335DAEC5DEB6BF30C9F8A9E44E2FCB48E97C68EF9294A0C6E505986CFE012CE109C414C35AAE38C1EB9749A2A921D7115E3CAC78F3333CF39A09F694A085DEC4BD5FB093E0AE724DFE78A6D50612A00B24F910D85DA538E918DA7FC112ED342AB1C15D36C747FBF3A087DD6367FCA29085581F8302E2221D62A0DA4B0A6DE109A50B4CC5E155C078008FE0AB0F382BB1AC72268C0E73C90ECEC58B79BB944606E3E453E3105D5D5E61C237014891916DD7C4783112E453EB030164DD802B239C0640DE7769CCF19622C09FF8EED27CED8AD67D0064BA5E3C548B29B04435B259F858A7A12D8D7D9AE41E6E3895102C2D6E39FFA4A03FCDFBF4EE8652C17A6C4A72A0CEF8991C4472CA22CE5BCE5FDA48B0E9089E15A439EA4EA0EE9DE0FF39726F3E4422E3CD83E1460439B26092F4DD7E12EA15AD529F55EC7FE56C6744D75B86A081A0E89A0E889E88687742D6471FE3E20503F4C47E84C3CAA81245A370781238D82FE666465E90BBED2B637BA6E9D04D0045C014A907F31EE45B5ED794916E0C3EB31CB846E740E038248F6A46EDE558A46FC9944986AB82565A210268336E141DA316CF0A04230B840F2BB4B6FD3B51782958C2671A0A7E7C87179C124040CE86A29ED0AC3813CA4689A7C64A35D7D30DEE271DEEEBBCBF2F2E54615CB3347F317E7EAA540E305DA454A5DC969E29F5672687B379616C36C2316F20C25D44516E96D13F33F57FA332AC3486604B025FB82B7CA338029AE73F19270E7AE781A1D304F399FEF49D60EC4A42B6143A295C553B8EEBB91B8748014FB4EB92510763B4BA3A224C284EF33B3D067694B5B28BA5B938944AE577E970025959C3A4278293CDDE882BEB9BAFF21ADBAAA1B5CE0247BD7B625E23547431600519128FC7C92BECF271A0D33F6D32B7454CEAC17CA638F772A4B5DA3ED73C0C89B10145EEF1D75EB9A7271CD5B4D07D95C12CA0D7C783D026F89D4D56DB1860DDCDE5CBD01C9AA4F080E1257A6A6F97023BBB9EBE81C2FF9F918875CD53B1AF3AB7B1C32ED91EC69FCAF7F3F28EBFAB59B1566915DFD6AC9A7320203981895C8271FA3860C8BCA0190C003AEAA5D0E036CE1EFD83F9959EF3C163018ECE26AC22BFF5ABC3D616F383BD459173A9AA30DA2B4348892889595C97DA61B3053405F837F02A765AB1684C32F8318C2F298D65BEE44DD07ABFEB3B2CFDFD0D492043032286C910E15ECEB86A39FA31D4AA12ADF9374AA0E8D20CC9BCC8DDD676ADDAF308A79B39798446606AA1D1570A692954319443354D4229EF2C213C489797B656B610BD621602E169B8477AC32E44CA0D49ABD4BD91926582BFCC8ED032A727F57F04931E7F00ABF1D508560B7E6B75C93CA2C911DCD32A12463CA5A5717E23133D94E24FB61BEFE75CEC86D868A8C0D6A256519B588EEE2F1EEB5D1AAD07BA5A2FB9D9CCF63AA507F5A5F3756CCA8C62AE413F63D6A2E8B08",
    "Access-Control-Allow-Origin": "*",
    crossdomain: true,
  },
  timeout: 3000,
});

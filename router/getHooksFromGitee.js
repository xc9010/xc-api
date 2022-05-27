const Router = require('koa-router');
const router = new Router();

const res = {

  "code": 0,
  "datas": {
    "start": 0,
    "ordids": [

      {

        "colname": "ID",

        "ordasc": false

      }

    ],
    "isFullRangeSubTotalEnabled": false,
    "message": null,
    "tabname": "CP_C_PHY_WAREHOUSE",
    "tabth": [

      {

        "issubtotal": false,

        "agfilter": "LIST",

        "orderno": 1,

        "isak": false,

        "display": "text",

        "length": 20,

        "scale": 0,

        "type": "NUMBER",

        "datelimit": "all",

        "isagfilter": false,

        "isfilter": false,

        "colname": "ID",

        "isuppercase": false,

        "isnotnull": false,

        "ismodify": false,

        "name": "ID",

        "inputname": "ID"

      },

      {

        "issubtotal": false,

        "agfilter": "LIST",

        "orderno": 3,

        "isak": false,

        "display": "text",

        "length": 100,

        "type": "STRING",

        "datelimit": "all",

        "isagfilter": true,

        "isfilter": true,

        "colname": "ECODE",

        "isuppercase": false,

        "isnotnull": true,

        "ismodify": false,

        "name": "实体仓库编码",

        "isorder": true,

        "inputname": "ECODE"

      },

      {

        "issubtotal": false,

        "agfilter": "LIST",

        "orderno": 4,

        "isak": true,

        "display": "text",

        "length": 100,

        "type": "STRING",

        "datelimit": "all",

        "isagfilter": true,

        "isfilter": true,

        "colname": "ENAME",

        "isuppercase": false,

        "isnotnull": true,

        "ismodify": false,

        "name": "实体仓库名称",

        "isorder": true,

        "inputname": "ENAME"

      },

      {

        "issubtotal": false,

        "agfilter": "LIST",

        "orderno": 5,

        "isak": false,

        "display": "text",

        "length": 50,

        "type": "STRING",

        "datelimit": "all",

        "isagfilter": true,

        "isfilter": false,

        "colname": "WMS_WAREHOUSE_CODE",

        "isuppercase": false,

        "isnotnull": false,

        "ismodify": true,

        "name": "WMS仓库编码",

        "inputname": "WMS_WAREHOUSE_CODE"

      },

      {

        "issubtotal": false,

        "agfilter": "LIST",

        "orderno": 6,

        "isak": false,

        "display": "text",

        "length": 100,

        "type": "STRING",

        "datelimit": "all",

        "isagfilter": true,

        "isfilter": false,

        "colname": "OWNER_CODE",

        "isuppercase": false,

        "isnotnull": false,

        "ismodify": true,

        "name": "货主编号",

        "inputname": "OWNER_CODE"

      },

      {

        "issubtotal": false,

        "agfilter": "LIST",

        "orderno": 7,

        "isak": false,

        "display": "text",

        "length": 100,

        "type": "STRING",

        "datelimit": "all",

        "isagfilter": true,

        "isfilter": true,

        "colname": "WMS_ACCOUNT",

        "isuppercase": false,

        "isnotnull": false,

        "ismodify": true,

        "name": "奇门CustomerId",

        "inputname": "WMS_ACCOUNT"

      },

      {

        "issubtotal": false,

        "agfilter": "LIST",

        "orderno": 9,

        "isak": false,

        "display": "text",

        "length": 500,

        "type": "STRING",

        "datelimit": "all",

        "isagfilter": true,

        "isfilter": false,

        "colname": "REMARK",

        "isuppercase": false,

        "isnotnull": false,

        "ismodify": true,

        "name": "备注",

        "inputname": "REMARK"

      },

      {

        "issubtotal": false,

        "agfilter": "LIST",

        "orderno": 12,

        "isak": false,

        "display": "text",

        "length": 200,

        "type": "STRING",

        "datelimit": "all",

        "isagfilter": true,

        "isfilter": false,

        "colname": "CONTACT_NAME",

        "isuppercase": false,

        "isnotnull": true,

        "ismodify": true,

        "name": "联系人",

        "inputname": "CONTACT_NAME"

      },

      {

        "issubtotal": false,

        "agfilter": "LIST",

        "orderno": 12,

        "isak": false,

        "display": "text",

        "length": 20,

        "type": "STRING",

        "datelimit": "all",

        "isagfilter": true,

        "isfilter": false,

        "colname": "MOBILEPHONE_NUM",

        "isuppercase": false,

        "isnotnull": true,

        "ismodify": true,

        "name": "手机号码",

        "inputname": "MOBILEPHONE_NUM"

      },

      {

        "issubtotal": false,

        "agfilter": "LIST",

        "orderno": 13,

        "isak": false,

        "display": "text",

        "length": 20,

        "type": "STRING",

        "datelimit": "all",

        "isagfilter": true,

        "isfilter": false,

        "colname": "PHONE_NUM",

        "isuppercase": false,

        "isnotnull": false,

        "ismodify": true,

        "name": "电话号码",

        "inputname": "PHONE_NUM"

      },

      {

        "issubtotal": false,

        "reftable": "CP_C_PROVINCE",

        "agfilter": "LIST",

        "orderno": 14,

        "isak": false,

        "display": "text",

        "length": 20,

        "reftableid": 23862,

        "type": "STRING",

        "datelimit": "all",

        "isagfilter": true,

        "isfilter": false,

        "colname": "SELLER_PROVINCE_ID",

        "isuppercase": false,

        "isnotnull": true,

        "fkdesc": "省份",

        "ismodify": true,

        "name": "所在省",

        "fkdisplay": "drp",

        "inputname": "SELLER_PROVINCE_ID:ENAME",

        "isfk": true,

        "objdistype": "object"

      },

      {

        "issubtotal": false,

        "reftable": "CP_C_CITY",

        "agfilter": "LIST",

        "orderno": 15,

        "isak": false,

        "display": "text",

        "length": 20,

        "reftableid": 23864,

        "type": "STRING",

        "datelimit": "all",

        "isagfilter": true,

        "isfilter": false,

        "colname": "SELLER_CITY_ID",

        "isuppercase": false,

        "isnotnull": true,

        "fkdesc": "城市",

        "ismodify": true,

        "name": "所在市",

        "fkdisplay": "drp",

        "inputname": "SELLER_CITY_ID:ENAME",

        "isfk": true,

        "refcolval": {

          "fixcolumn": "C_UP_ID",

          "expre": "equal",

          "srccol": "SELLER_PROVINCE_ID"

        },

        "objdistype": "object"

      },

      {

        "issubtotal": false,

        "reftable": "CP_C_DISTAREA",

        "agfilter": "LIST",

        "orderno": 16,

        "isak": false,

        "display": "text",

        "length": 20,

        "reftableid": 23863,

        "type": "STRING",

        "datelimit": "all",

        "isagfilter": true,

        "isfilter": false,

        "colname": "SELLER_AREA_ID",

        "isuppercase": false,

        "isnotnull": true,

        "fkdesc": "区县",

        "ismodify": true,

        "name": "所在区县",

        "fkdisplay": "drp",

        "inputname": "SELLER_AREA_ID:ENAME",

        "isfk": true,

        "refcolval": {

          "fixcolumn": "C_UP_ID",

          "expre": "equal",

          "srccol": "SELLER_CITY_ID"

        },

        "objdistype": "object"

      },

      {

        "issubtotal": false,

        "agfilter": "LIST",

        "orderno": 17,

        "isak": false,

        "display": "text",

        "length": 200,

        "type": "STRING",

        "datelimit": "all",

        "isagfilter": true,

        "isfilter": false,

        "colname": "SEND_ADDRESS",

        "isuppercase": false,

        "isnotnull": true,

        "ismodify": true,

        "name": "发货地址",

        "inputname": "SEND_ADDRESS"

      },

      {

        "issubtotal": false,

        "agfilter": "LIST",

        "orderno": 18,

        "isak": false,

        "display": "text",

        "length": 20,

        "type": "STRING",

        "datelimit": "all",

        "isagfilter": true,

        "isfilter": false,

        "colname": "SELLER_ZIP",

        "isuppercase": false,

        "isnotnull": false,

        "ismodify": true,

        "name": "邮编",

        "inputname": "SELLER_ZIP"

      },

      {

        "issubtotal": false,

        "reftable": "CP_C_PHY_WAREHOUSE",

        "agfilter": "LIST",

        "orderno": 20,

        "isak": false,

        "display": "text",

        "length": 20,

        "reftableid": 24486,

        "type": "STRING",

        "datelimit": "all",

        "isagfilter": true,

        "isfilter": false,

        "colname": "ORIGINAL_RETURN_PHY_WAREHOUSE_ID",

        "isuppercase": false,

        "isnotnull": false,

        "fkdesc": "实体仓档案",

        "ismodify": true,

        "name": "原退入库实体仓",

        "fkdisplay": "drp",

        "inputname": "ORIGINAL_RETURN_PHY_WAREHOUSE_ID:ENAME",

        "isfk": true,

        "objdistype": "tabpanle"

      },

      {

        "issubtotal": false,

        "agfilter": "LIST",

        "orderno": 25,

        "isak": false,

        "display": "text",

        "length": 100,

        "type": "STRING",

        "datelimit": "all",

        "isagfilter": true,

        "isfilter": false,

        "colname": "JIT_WAREHOUSE_ECODE",

        "isuppercase": false,

        "isnotnull": false,

        "ismodify": true,

        "name": "唯品会仓库",

        "inputname": "JIT_WAREHOUSE_ECODE"

      },

      {

        "issubtotal": false,

        "agfilter": "LIST",

        "orderno": 30,

        "isak": false,

        "display": "select",

        "length": 10,

        "type": "STRING",

        "datelimit": "all",

        "isagfilter": true,

        "isfilter": true,

        "colname": "WH_TYPE",

        "isuppercase": false,

        "isnotnull": false,

        "ismodify": true,

        "name": "仓库类型",

        "combobox": [

          {

            "limitdesc": "电商仓库",

            "limitcss": null,

            "limitval": "01"

          },

          {

            "limitdesc": "门店",

            "limitcss": null,

            "limitval": "02"

          },

          {

            "limitdesc": "客户仓",

            "limitcss": null,

            "limitval": "03"

          },

          {

            "limitdesc": "分公司仓",

            "limitcss": null,

            "limitval": "04"

          },

          {

            "limitdesc": "O2O仓",

            "limitcss": null,

            "limitval": "05"

          },

          {

            "limitdesc": "预售仓",

            "limitcss": null,

            "limitval": "06"

          },

          {

            "limitdesc": "工厂仓",

            "limitcss": null,

            "limitval": "07"

          }

        ],

        "inputname": "WH_TYPE"

      },

      {

        "issubtotal": false,

        "reftable": "CP_C_STORE_NATURE",

        "agfilter": "LIST",

        "orderno": 35,

        "isak": false,

        "display": "text",

        "length": 20,

        "reftableid": 249230478,

        "type": "STRING",

        "datelimit": "all",

        "isagfilter": true,

        "isfilter": true,

        "colname": "CP_C_STORE_NATURE_ID",

        "isuppercase": false,

        "isnotnull": true,

        "fkdesc": "店仓性质",

        "ismodify": true,

        "name": "仓库性质",

        "fkdisplay": "drp",

        "inputname": "CP_C_STORE_NATURE_ID:ENAME",

        "isfk": true,

        "objdistype": "object"

      }

    ],
    "ids": [],
    "totalRowCount": 140,
    "rowCount": 10,
    "row": [
      {

        "ENAME": {

          "val": "XWT-PHY-I-1NAME-003"

        },

        "CONTACT_NAME": {

          "val": "2131"

        },

        "SEND_ADDRESS": {

          "val": "sdfsdfsdfdsfsdf"

        },

        "SELLER_AREA_ID": {

          "val": "其它区",

          "reftablename": "CP_C_DISTAREA",

          "reftableid": 23863,

          "reftabdesc": "区县",

          "refobjid": 710903,

          "colid": 165912,

          "isfk": true

        },

        "PHONE_NUM": {

          "val": ""

        },

        "SELLER_ZIP": {

          "val": ""

        },

        "OWNER_CODE": {

          "val": ""

        },

        "WMS_ACCOUNT": {

          "val": ""

        },

        "ORIGINAL_RETURN_PHY_WAREHOUSE_ID": {

          "val": "",

          "reftablename": "CP_C_PHY_WAREHOUSE",

          "reftableid": 24486,

          "reftabdesc": "实体仓档案",

          "refobjid": -1,

          "colid": 183350,

          "isfk": true

        },

        "SELLER_PROVINCE_ID": {

          "val": "陕西省",

          "reftablename": "CP_C_PROVINCE",

          "reftableid": 23862,

          "reftabdesc": "省份",

          "refobjid": 610000,

          "colid": 165910,

          "isfk": true

        },

        "WMS_WAREHOUSE_CODE": {

          "val": ""

        },

        "SELLER_CITY_ID": {

          "val": "汉中市",

          "reftablename": "CP_C_CITY",

          "reftableid": 23864,

          "reftabdesc": "城市",

          "refobjid": 610700,

          "colid": 165911,

          "isfk": true

        },

        "JIT_WAREHOUSE_ECODE": {

          "val": ""

        },

        "MOBILEPHONE_NUM": {

          "val": "12312312312"

        },

        "WH_TYPE": {

          "val": "电商仓库"

        },

        "ECODE": {

          "val": "XWT-PHY-I-CODE-0031"

        },

        "ID": {

          "val": "169"

        },

        "REMARK": {

          "val": ""

        },

        "CP_C_STORE_NATURE_ID": {

          "val": "森马电商仓",

          "reftablename": "CP_C_STORE_NATURE",

          "reftableid": 249230478,

          "reftabdesc": "店仓性质",

          "refobjid": 26,

          "colid": 1700816187,

          "isfk": true

        }

      },
      {

        "ENAME": {

          "val": "XWT-PHY-I-NAME-003"

        },

        "CONTACT_NAME": {

          "val": "2131"

        },

        "SEND_ADDRESS": {

          "val": "sdfsdfsdfdsfsdf"

        },

        "SELLER_AREA_ID": {

          "val": "其它区",

          "reftablename": "CP_C_DISTAREA",

          "reftableid": 23863,

          "reftabdesc": "区县",

          "refobjid": 710903,

          "colid": 165912,

          "isfk": true

        },

        "PHONE_NUM": {

          "val": ""

        },

        "SELLER_ZIP": {

          "val": ""

        },

        "OWNER_CODE": {

          "val": ""

        },

        "WMS_ACCOUNT": {

          "val": ""

        },

        "ORIGINAL_RETURN_PHY_WAREHOUSE_ID": {

          "val": "",

          "reftablename": "CP_C_PHY_WAREHOUSE",

          "reftableid": 24486,

          "reftabdesc": "实体仓档案",

          "refobjid": -1,

          "colid": 183350,

          "isfk": true

        },

        "SELLER_PROVINCE_ID": {

          "val": "陕西省",

          "reftablename": "CP_C_PROVINCE",

          "reftableid": 23862,

          "reftabdesc": "省份",

          "refobjid": 610000,

          "colid": 165910,

          "isfk": true

        },

        "WMS_WAREHOUSE_CODE": {

          "val": ""

        },

        "SELLER_CITY_ID": {

          "val": "汉中市",

          "reftablename": "CP_C_CITY",

          "reftableid": 23864,

          "reftabdesc": "城市",

          "refobjid": 610700,

          "colid": 165911,

          "isfk": true

        },

        "JIT_WAREHOUSE_ECODE": {

          "val": ""

        },

        "MOBILEPHONE_NUM": {

          "val": "12312312312"

        },

        "WH_TYPE": {

          "val": "电商仓库"

        },

        "ECODE": {

          "val": "XWT-PHY-I-CODE-003"

        },

        "ID": {

          "val": "168"

        },

        "REMARK": {

          "val": ""

        },

        "CP_C_STORE_NATURE_ID": {

          "val": "森马电商仓",

          "reftablename": "CP_C_STORE_NATURE",

          "reftableid": 249230478,

          "reftabdesc": "店仓性质",

          "refobjid": 26,

          "colid": 1700816187,

          "isfk": true

        }

      },
      {

        "ENAME": {

          "val": "12121XXde11"

        },

        "CONTACT_NAME": {

          "val": "12121XXde111"

        },

        "SEND_ADDRESS": {

          "val": "12121XXde"

        },

        "SELLER_AREA_ID": {

          "val": "和平区",

          "reftablename": "CP_C_DISTAREA",

          "reftableid": 23863,

          "reftabdesc": "区县",

          "refobjid": 120101,

          "colid": 165912,

          "isfk": true

        },

        "PHONE_NUM": {

          "val": ""

        },

        "SELLER_ZIP": {

          "val": ""

        },

        "OWNER_CODE": {

          "val": "12121XXde"

        },

        "WMS_ACCOUNT": {

          "val": "12121XXde"

        },

        "ORIGINAL_RETURN_PHY_WAREHOUSE_ID": {

          "val": "Burgeon-phy",

          "reftablename": "CP_C_PHY_WAREHOUSE",

          "reftableid": 24486,

          "reftabdesc": "实体仓档案",

          "refobjid": 163,

          "colid": 183350,

          "isfk": true

        },

        "SELLER_PROVINCE_ID": {

          "val": "天津",

          "reftablename": "CP_C_PROVINCE",

          "reftableid": 23862,

          "reftabdesc": "省份",

          "refobjid": 120000,

          "colid": 165910,

          "isfk": true

        },

        "WMS_WAREHOUSE_CODE": {

          "val": "12121XXde"

        },

        "SELLER_CITY_ID": {

          "val": "天津市",

          "reftablename": "CP_C_CITY",

          "reftableid": 23864,

          "reftabdesc": "城市",

          "refobjid": 120100,

          "colid": 165911,

          "isfk": true

        },

        "JIT_WAREHOUSE_ECODE": {

          "val": "12121XXde"

        },

        "MOBILEPHONE_NUM": {

          "val": "1123123123123"

        },

        "WH_TYPE": {

          "val": "门店"

        },

        "ECODE": {

          "val": "12121XXde"

        },

        "ID": {

          "val": "166"

        },

        "REMARK": {

          "val": "12121XXde"

        },

        "CP_C_STORE_NATURE_ID": {

          "val": "虚拟",

          "reftablename": "CP_C_STORE_NATURE",

          "reftableid": 249230478,

          "reftabdesc": "店仓性质",

          "refobjid": 27,

          "colid": 1700816187,

          "isfk": true

        }

      },
      {

        "ENAME": {

          "val": "Same_city_phy"

        },

        "CONTACT_NAME": {

          "val": "sun"

        },

        "SEND_ADDRESS": {

          "val": "杭州余杭区"

        },

        "SELLER_AREA_ID": {

          "val": "东城区",

          "reftablename": "CP_C_DISTAREA",

          "reftableid": 23863,

          "reftabdesc": "区县",

          "refobjid": 110101,

          "colid": 165912,

          "isfk": true

        },

        "PHONE_NUM": {

          "val": ""

        },

        "SELLER_ZIP": {

          "val": ""

        },

        "OWNER_CODE": {

          "val": "SEMIR"

        },

        "WMS_ACCOUNT": {

          "val": "SEMIR_BJ_TEST"

        },

        "ORIGINAL_RETURN_PHY_WAREHOUSE_ID": {

          "val": "",

          "reftablename": "CP_C_PHY_WAREHOUSE",

          "reftableid": 24486,

          "reftabdesc": "实体仓档案",

          "refobjid": -1,

          "colid": 183350,

          "isfk": true

        },

        "SELLER_PROVINCE_ID": {

          "val": "北京",

          "reftablename": "CP_C_PROVINCE",

          "reftableid": 23862,

          "reftabdesc": "省份",

          "refobjid": 110000,

          "colid": 165910,

          "isfk": true

        },

        "WMS_WAREHOUSE_CODE": {

          "val": "Same_city_phy"

        },

        "SELLER_CITY_ID": {

          "val": "北京市",

          "reftablename": "CP_C_CITY",

          "reftableid": 23864,

          "reftabdesc": "城市",

          "refobjid": 110100,

          "colid": 165911,

          "isfk": true

        },

        "JIT_WAREHOUSE_ECODE": {

          "val": ""

        },

        "MOBILEPHONE_NUM": {

          "val": "1104577327"

        },

        "WH_TYPE": {

          "val": "门店"

        },

        "ECODE": {

          "val": "Same_city_phy"

        },

        "ID": {

          "val": "165"

        },

        "REMARK": {

          "val": ""

        },

        "CP_C_STORE_NATURE_ID": {

          "val": "森马电商仓",

          "reftablename": "CP_C_STORE_NATURE",

          "reftableid": 249230478,

          "reftabdesc": "店仓性质",

          "refobjid": 26,

          "colid": 1700816187,

          "isfk": true

        }

      },
      {

        "ENAME": {

          "val": "Burgeon-phy"

        },

        "CONTACT_NAME": {

          "val": "sun"

        },

        "SEND_ADDRESS": {

          "val": "杭州余杭区"

        },

        "SELLER_AREA_ID": {

          "val": "东城区",

          "reftablename": "CP_C_DISTAREA",

          "reftableid": 23863,

          "reftabdesc": "区县",

          "refobjid": 110101,

          "colid": 165912,

          "isfk": true

        },

        "PHONE_NUM": {

          "val": ""

        },

        "SELLER_ZIP": {

          "val": ""

        },

        "OWNER_CODE": {

          "val": "SEMIR"

        },

        "WMS_ACCOUNT": {

          "val": "SEMIR_BJ_TEST"

        },

        "ORIGINAL_RETURN_PHY_WAREHOUSE_ID": {

          "val": "",

          "reftablename": "CP_C_PHY_WAREHOUSE",

          "reftableid": 24486,

          "reftabdesc": "实体仓档案",

          "refobjid": -1,

          "colid": 183350,

          "isfk": true

        },

        "SELLER_PROVINCE_ID": {

          "val": "北京",

          "reftablename": "CP_C_PROVINCE",

          "reftableid": 23862,

          "reftabdesc": "省份",

          "refobjid": 110000,

          "colid": 165910,

          "isfk": true

        },

        "WMS_WAREHOUSE_CODE": {

          "val": "Burgeon-phy"

        },

        "SELLER_CITY_ID": {

          "val": "北京市",

          "reftablename": "CP_C_CITY",

          "reftableid": 23864,

          "reftabdesc": "城市",

          "refobjid": 110100,

          "colid": 165911,

          "isfk": true

        },

        "JIT_WAREHOUSE_ECODE": {

          "val": ""

        },

        "MOBILEPHONE_NUM": {

          "val": "1104577327"

        },

        "WH_TYPE": {

          "val": "门店"

        },

        "ECODE": {

          "val": "Burgeon-phy"

        },

        "ID": {

          "val": "163"

        },

        "REMARK": {

          "val": ""

        },

        "CP_C_STORE_NATURE_ID": {

          "val": "森马电商仓",

          "reftablename": "CP_C_STORE_NATURE",

          "reftableid": 249230478,

          "reftabdesc": "店仓性质",

          "refobjid": 26,

          "colid": 1700816187,

          "isfk": true

        }

      },
      {

        "ENAME": {

          "val": "Gale实体仓"

        },

        "CONTACT_NAME": {

          "val": "sun"

        },

        "SEND_ADDRESS": {

          "val": "风格和救援任务"

        },

        "SELLER_AREA_ID": {

          "val": "东城区",

          "reftablename": "CP_C_DISTAREA",

          "reftableid": 23863,

          "reftabdesc": "区县",

          "refobjid": 110101,

          "colid": 165912,

          "isfk": true

        },

        "PHONE_NUM": {

          "val": "13667855432"

        },

        "SELLER_ZIP": {

          "val": ""

        },

        "OWNER_CODE": {

          "val": ""

        },

        "WMS_ACCOUNT": {

          "val": ""

        },

        "ORIGINAL_RETURN_PHY_WAREHOUSE_ID": {

          "val": "",

          "reftablename": "CP_C_PHY_WAREHOUSE",

          "reftableid": 24486,

          "reftabdesc": "实体仓档案",

          "refobjid": -1,

          "colid": 183350,

          "isfk": true

        },

        "SELLER_PROVINCE_ID": {

          "val": "北京",

          "reftablename": "CP_C_PROVINCE",

          "reftableid": 23862,

          "reftabdesc": "省份",

          "refobjid": 110000,

          "colid": 165910,

          "isfk": true

        },

        "WMS_WAREHOUSE_CODE": {

          "val": ""

        },

        "SELLER_CITY_ID": {

          "val": "北京市",

          "reftablename": "CP_C_CITY",

          "reftableid": 23864,

          "reftabdesc": "城市",

          "refobjid": 110100,

          "colid": 165911,

          "isfk": true

        },

        "JIT_WAREHOUSE_ECODE": {

          "val": ""

        },

        "MOBILEPHONE_NUM": {

          "val": "13667855432"

        },

        "WH_TYPE": {

          "val": "电商仓库"

        },

        "ECODE": {

          "val": "Gale0025"

        },

        "ID": {

          "val": "162"

        },

        "REMARK": {

          "val": "cash"

        },

        "CP_C_STORE_NATURE_ID": {

          "val": "森马电商仓",

          "reftablename": "CP_C_STORE_NATURE",

          "reftableid": 249230478,

          "reftabdesc": "店仓性质",

          "refobjid": 26,

          "colid": 1700816187,

          "isfk": true

        }

      },
      {

        "ENAME": {

          "val": "1502实体仓"

        },

        "CONTACT_NAME": {

          "val": "刘大"

        },

        "SEND_ADDRESS": {

          "val": "民乐城"

        },

        "SELLER_AREA_ID": {

          "val": "浦东新区",

          "reftablename": "CP_C_DISTAREA",

          "reftableid": 23863,

          "reftabdesc": "区县",

          "refobjid": 310115,

          "colid": 165912,

          "isfk": true

        },

        "PHONE_NUM": {

          "val": ""

        },

        "SELLER_ZIP": {

          "val": ""

        },

        "OWNER_CODE": {

          "val": ""

        },

        "WMS_ACCOUNT": {

          "val": ""

        },

        "ORIGINAL_RETURN_PHY_WAREHOUSE_ID": {

          "val": "",

          "reftablename": "CP_C_PHY_WAREHOUSE",

          "reftableid": 24486,

          "reftabdesc": "实体仓档案",

          "refobjid": -1,

          "colid": 183350,

          "isfk": true

        },

        "SELLER_PROVINCE_ID": {

          "val": "上海",

          "reftablename": "CP_C_PROVINCE",

          "reftableid": 23862,

          "reftabdesc": "省份",

          "refobjid": 310000,

          "colid": 165910,

          "isfk": true

        },

        "WMS_WAREHOUSE_CODE": {

          "val": "wms12"

        },

        "SELLER_CITY_ID": {

          "val": "上海市",

          "reftablename": "CP_C_CITY",

          "reftableid": 23864,

          "reftabdesc": "城市",

          "refobjid": 310100,

          "colid": 165911,

          "isfk": true

        },

        "JIT_WAREHOUSE_ECODE": {

          "val": ""

        },

        "MOBILEPHONE_NUM": {

          "val": "15093344765"

        },

        "WH_TYPE": {

          "val": "电商仓库"

        },

        "ECODE": {

          "val": "2115-2"

        },

        "ID": {

          "val": "161"

        },

        "REMARK": {

          "val": ""

        },

        "CP_C_STORE_NATURE_ID": {

          "val": "森马电商仓",

          "reftablename": "CP_C_STORE_NATURE",

          "reftableid": 249230478,

          "reftabdesc": "店仓性质",

          "refobjid": 26,

          "colid": 1700816187,

          "isfk": true

        }

      },
      {

        "ENAME": {

          "val": "1501实体仓"

        },

        "CONTACT_NAME": {

          "val": "刘大"

        },

        "SEND_ADDRESS": {

          "val": "民乐城"

        },

        "SELLER_AREA_ID": {

          "val": "浦东新区",

          "reftablename": "CP_C_DISTAREA",

          "reftableid": 23863,

          "reftabdesc": "区县",

          "refobjid": 310115,

          "colid": 165912,

          "isfk": true

        },

        "PHONE_NUM": {

          "val": ""

        },

        "SELLER_ZIP": {

          "val": ""

        },

        "OWNER_CODE": {

          "val": ""

        },

        "WMS_ACCOUNT": {

          "val": ""

        },

        "ORIGINAL_RETURN_PHY_WAREHOUSE_ID": {

          "val": "",

          "reftablename": "CP_C_PHY_WAREHOUSE",

          "reftableid": 24486,

          "reftabdesc": "实体仓档案",

          "refobjid": -1,

          "colid": 183350,

          "isfk": true

        },

        "SELLER_PROVINCE_ID": {

          "val": "上海",

          "reftablename": "CP_C_PROVINCE",

          "reftableid": 23862,

          "reftabdesc": "省份",

          "refobjid": 310000,

          "colid": 165910,

          "isfk": true

        },

        "WMS_WAREHOUSE_CODE": {

          "val": "wms12"

        },

        "SELLER_CITY_ID": {

          "val": "上海市",

          "reftablename": "CP_C_CITY",

          "reftableid": 23864,

          "reftabdesc": "城市",

          "refobjid": 310100,

          "colid": 165911,

          "isfk": true

        },

        "JIT_WAREHOUSE_ECODE": {

          "val": ""

        },

        "MOBILEPHONE_NUM": {

          "val": "15093344765"

        },

        "WH_TYPE": {

          "val": "电商仓库"

        },

        "ECODE": {

          "val": "2115-1"

        },

        "ID": {

          "val": "160"

        },

        "REMARK": {

          "val": ""

        },

        "CP_C_STORE_NATURE_ID": {

          "val": "森马电商仓",

          "reftablename": "CP_C_STORE_NATURE",

          "reftableid": 249230478,

          "reftabdesc": "店仓性质",

          "refobjid": 26,

          "colid": 1700816187,

          "isfk": true

        }

      },
      {

        "ENAME": {

          "val": "Q冒烟实体仓"

        },

        "CONTACT_NAME": {

          "val": "sun"

        },

        "SEND_ADDRESS": {

          "val": "杭州余杭区"

        },

        "SELLER_AREA_ID": {

          "val": "东城区",

          "reftablename": "CP_C_DISTAREA",

          "reftableid": 23863,

          "reftabdesc": "区县",

          "refobjid": 110101,

          "colid": 165912,

          "isfk": true

        },

        "PHONE_NUM": {

          "val": ""

        },

        "SELLER_ZIP": {

          "val": ""

        },

        "OWNER_CODE": {

          "val": "SEMIR"

        },

        "WMS_ACCOUNT": {

          "val": "SEMIR_BJ_TEST"

        },

        "ORIGINAL_RETURN_PHY_WAREHOUSE_ID": {

          "val": "福州苍山万达门店仓",

          "reftablename": "CP_C_PHY_WAREHOUSE",

          "reftableid": 24486,

          "reftabdesc": "实体仓档案",

          "refobjid": 43,

          "colid": 183350,

          "isfk": true

        },

        "SELLER_PROVINCE_ID": {

          "val": "北京",

          "reftablename": "CP_C_PROVINCE",

          "reftableid": 23862,

          "reftabdesc": "省份",

          "refobjid": 110000,

          "colid": 165910,

          "isfk": true

        },

        "WMS_WAREHOUSE_CODE": {

          "val": "WP01_BVT_1"

        },

        "SELLER_CITY_ID": {

          "val": "北京市",

          "reftablename": "CP_C_CITY",

          "reftableid": 23864,

          "reftabdesc": "城市",

          "refobjid": 110100,

          "colid": 165911,

          "isfk": true

        },

        "JIT_WAREHOUSE_ECODE": {

          "val": ""

        },

        "MOBILEPHONE_NUM": {

          "val": "1104577327"

        },

        "WH_TYPE": {

          "val": "门店"

        },

        "ECODE": {

          "val": "QWP01_BVT_1"

        },

        "ID": {

          "val": "159"

        },

        "REMARK": {

          "val": ""

        },

        "CP_C_STORE_NATURE_ID": {

          "val": "森马电商仓",

          "reftablename": "CP_C_STORE_NATURE",

          "reftableid": 249230478,

          "reftabdesc": "店仓性质",

          "refobjid": 26,

          "colid": 1700816187,

          "isfk": true

        }

      },
      {

        "ENAME": {

          "val": "合并策略实体仓"

        },

        "CONTACT_NAME": {

          "val": "合并测试"

        },

        "SEND_ADDRESS": {

          "val": "森马电商"

        },

        "SELLER_AREA_ID": {

          "val": "余杭区",

          "reftablename": "CP_C_DISTAREA",

          "reftableid": 23863,

          "reftabdesc": "区县",

          "refobjid": 330110,

          "colid": 165912,

          "isfk": true

        },

        "PHONE_NUM": {

          "val": ""

        },

        "SELLER_ZIP": {

          "val": ""

        },

        "OWNER_CODE": {

          "val": ""

        },

        "WMS_ACCOUNT": {

          "val": ""

        },

        "ORIGINAL_RETURN_PHY_WAREHOUSE_ID": {

          "val": "",

          "reftablename": "CP_C_PHY_WAREHOUSE",

          "reftableid": 24486,

          "reftabdesc": "实体仓档案",

          "refobjid": -1,

          "colid": 183350,

          "isfk": true

        },

        "SELLER_PROVINCE_ID": {

          "val": "浙江省",

          "reftablename": "CP_C_PROVINCE",

          "reftableid": 23862,

          "reftabdesc": "省份",

          "refobjid": 330000,

          "colid": 165910,

          "isfk": true

        },

        "WMS_WAREHOUSE_CODE": {

          "val": ""

        },

        "SELLER_CITY_ID": {

          "val": "杭州市",

          "reftablename": "CP_C_CITY",

          "reftableid": 23864,

          "reftabdesc": "城市",

          "refobjid": 330100,

          "colid": 165911,

          "isfk": true

        },

        "JIT_WAREHOUSE_ECODE": {

          "val": ""

        },

        "MOBILEPHONE_NUM": {

          "val": "18907073073"

        },

        "WH_TYPE": {

          "val": "电商仓库"

        },

        "ECODE": {

          "val": "MergeTest_W001"

        },

        "ID": {

          "val": "158"

        },

        "REMARK": {

          "val": "合并测试"

        },

        "CP_C_STORE_NATURE_ID": {

          "val": "森马电商仓",

          "reftablename": "CP_C_STORE_NATURE",

          "reftableid": 249230478,

          "reftabdesc": "店仓性质",

          "refobjid": 26,

          "colid": 1700816187,

          "isfk": true

        }

      }
    ],
    "selectrange": [

      10,

      20,

      30,

      50,

      100

    ],
    "queryDesc": " (可用 = 是) ",
    "defaultrange": 10,
    "objdistype": "tabpanle"
  }

}

router.get('/', async ctx => {
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.body = res
});


module.exports = router;

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetChangeLogParams = exports.GetChangeLogParamsField = exports.createGetChangeLogParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[GetChangeLogParams.build]] instead.
 */
function createGetChangeLogParams(json) {
    return GetChangeLogParams.build(json);
}
exports.createGetChangeLogParams = createGetChangeLogParams;
/**
 * GetChangeLogParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var GetChangeLogParamsField = /** @class */ (function (_super) {
    __extends(GetChangeLogParamsField, _super);
    function GetChangeLogParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[GetChangeLogParams.primaryKey]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.primaryKey = new v4_1.ComplexTypeStringPropertyField('PrimaryKey', _this, 'Edm.String');
        /**
         * Representation of the [[GetChangeLogParams.udoObjectCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.udoObjectCode = new v4_1.ComplexTypeStringPropertyField('UDOObjectCode', _this, 'Edm.String');
        return _this;
    }
    return GetChangeLogParamsField;
}(v4_1.ComplexTypeField));
exports.GetChangeLogParamsField = GetChangeLogParamsField;
var GetChangeLogParams;
(function (GetChangeLogParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            PrimaryKey: function (primaryKey) { return ({ primaryKey: v4_1.edmToTs(primaryKey, 'Edm.String') }); },
            UDOObjectCode: function (udoObjectCode) { return ({ udoObjectCode: v4_1.edmToTs(udoObjectCode, 'Edm.String') }); }
        });
    }
    GetChangeLogParams.build = build;
})(GetChangeLogParams = exports.GetChangeLogParams || (exports.GetChangeLogParams = {}));
//# sourceMappingURL=GetChangeLogParams.js.map
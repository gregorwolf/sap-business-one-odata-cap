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
exports.RetornoCodeParams = exports.RetornoCodeParamsField = exports.createRetornoCodeParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[RetornoCodeParams.build]] instead.
 */
function createRetornoCodeParams(json) {
    return RetornoCodeParams.build(json);
}
exports.createRetornoCodeParams = createRetornoCodeParams;
/**
 * RetornoCodeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var RetornoCodeParamsField = /** @class */ (function (_super) {
    __extends(RetornoCodeParamsField, _super);
    function RetornoCodeParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[RetornoCodeParams.absEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absEntry = new v4_1.ComplexTypeNumberPropertyField('AbsEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[RetornoCodeParams.occurenceCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.occurenceCode = new v4_1.ComplexTypeNumberPropertyField('OccurenceCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[RetornoCodeParams.movementCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.movementCode = new v4_1.ComplexTypeNumberPropertyField('MovementCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[RetornoCodeParams.description]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.description = new v4_1.ComplexTypeStringPropertyField('Description', _this, 'Edm.String');
        /**
         * Representation of the [[RetornoCodeParams.color]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.color = new v4_1.ComplexTypeNumberPropertyField('Color', _this, 'Edm.Int32');
        /**
         * Representation of the [[RetornoCodeParams.fileFormat]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fileFormat = new v4_1.ComplexTypeStringPropertyField('FileFormat', _this, 'Edm.String');
        /**
         * Representation of the [[RetornoCodeParams.bankCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bankCode = new v4_1.ComplexTypeStringPropertyField('BankCode', _this, 'Edm.String');
        return _this;
    }
    return RetornoCodeParamsField;
}(v4_1.ComplexTypeField));
exports.RetornoCodeParamsField = RetornoCodeParamsField;
var RetornoCodeParams;
(function (RetornoCodeParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            AbsEntry: function (absEntry) { return ({ absEntry: v4_1.edmToTs(absEntry, 'Edm.Int32') }); },
            OccurenceCode: function (occurenceCode) { return ({ occurenceCode: v4_1.edmToTs(occurenceCode, 'Edm.Int32') }); },
            MovementCode: function (movementCode) { return ({ movementCode: v4_1.edmToTs(movementCode, 'Edm.Int32') }); },
            Description: function (description) { return ({ description: v4_1.edmToTs(description, 'Edm.String') }); },
            Color: function (color) { return ({ color: v4_1.edmToTs(color, 'Edm.Int32') }); },
            FileFormat: function (fileFormat) { return ({ fileFormat: v4_1.edmToTs(fileFormat, 'Edm.String') }); },
            BankCode: function (bankCode) { return ({ bankCode: v4_1.edmToTs(bankCode, 'Edm.String') }); }
        });
    }
    RetornoCodeParams.build = build;
})(RetornoCodeParams = exports.RetornoCodeParams || (exports.RetornoCodeParams = {}));
//# sourceMappingURL=RetornoCodeParams.js.map
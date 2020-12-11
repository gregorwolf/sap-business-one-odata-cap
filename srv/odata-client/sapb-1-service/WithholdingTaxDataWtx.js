"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithholdingTaxDataWtx = exports.WithholdingTaxDataWtxField = exports.createWithholdingTaxDataWtx = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[WithholdingTaxDataWtx.build]] instead.
 */
function createWithholdingTaxDataWtx(json) {
    return WithholdingTaxDataWtx.build(json);
}
exports.createWithholdingTaxDataWtx = createWithholdingTaxDataWtx;
/**
 * WithholdingTaxDataWtxField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var WithholdingTaxDataWtxField = /** @class */ (function (_super) {
    __extends(WithholdingTaxDataWtxField, _super);
    /**
     * Creates an instance of WithholdingTaxDataWtxField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function WithholdingTaxDataWtxField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, WithholdingTaxDataWtx) || this;
        /**
         * Representation of the [[WithholdingTaxDataWtx.wtAmountSys]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wtAmountSys = new core_1.ComplexTypeNumberPropertyField('WTAmountSys', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxDataWtx.wtAmountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wtAmountFc = new core_1.ComplexTypeNumberPropertyField('WTAmountFC', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxDataWtx.wtAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wtAmount = new core_1.ComplexTypeNumberPropertyField('WTAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxDataWtx.withholdingType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.withholdingType = new core_1.ComplexTypeStringPropertyField('WithholdingType', _this, 'Edm.String');
        /**
         * Representation of the [[WithholdingTaxDataWtx.taxableAmountinSys]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxableAmountinSys = new core_1.ComplexTypeNumberPropertyField('TaxableAmountinSys', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxDataWtx.taxableAmountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxableAmountFc = new core_1.ComplexTypeNumberPropertyField('TaxableAmountFC', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxDataWtx.taxableAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxableAmount = new core_1.ComplexTypeNumberPropertyField('TaxableAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxDataWtx.rate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rate = new core_1.ComplexTypeNumberPropertyField('Rate', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxDataWtx.category]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.category = new core_1.ComplexTypeStringPropertyField('Category', _this, 'Edm.String');
        /**
         * Representation of the [[WithholdingTaxDataWtx.baseType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseType = new core_1.ComplexTypeStringPropertyField('BaseType', _this, 'Edm.String');
        /**
         * Representation of the [[WithholdingTaxDataWtx.appliedWtAmountSys]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.appliedWtAmountSys = new core_1.ComplexTypeNumberPropertyField('AppliedWTAmountSys', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxDataWtx.appliedWtAmountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.appliedWtAmountFc = new core_1.ComplexTypeNumberPropertyField('AppliedWTAmountFC', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxDataWtx.appliedWtAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.appliedWtAmount = new core_1.ComplexTypeNumberPropertyField('AppliedWTAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxDataWtx.glAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.glAccount = new core_1.ComplexTypeStringPropertyField('GLAccount', _this, 'Edm.String');
        /**
         * Representation of the [[WithholdingTaxDataWtx.lineNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNum = new core_1.ComplexTypeNumberPropertyField('LineNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[WithholdingTaxDataWtx.baseDocEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseDocEntry = new core_1.ComplexTypeNumberPropertyField('BaseDocEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[WithholdingTaxDataWtx.baseDocLine]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseDocLine = new core_1.ComplexTypeNumberPropertyField('BaseDocLine', _this, 'Edm.Int32');
        /**
         * Representation of the [[WithholdingTaxDataWtx.baseDocType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseDocType = new core_1.ComplexTypeStringPropertyField('BaseDocType', _this, 'Edm.String');
        /**
         * Representation of the [[WithholdingTaxDataWtx.wtAbsId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wtAbsId = new core_1.ComplexTypeStringPropertyField('WTAbsId', _this, 'Edm.String');
        /**
         * Representation of the [[WithholdingTaxDataWtx.exemptRate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.exemptRate = new core_1.ComplexTypeNumberPropertyField('ExemptRate', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxDataWtx.baseNetAmountSys]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseNetAmountSys = new core_1.ComplexTypeNumberPropertyField('BaseNetAmountSys', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxDataWtx.baseNetAmountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseNetAmountFc = new core_1.ComplexTypeNumberPropertyField('BaseNetAmountFC', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxDataWtx.baseNetAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseNetAmount = new core_1.ComplexTypeNumberPropertyField('BaseNetAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxDataWtx.baseVatmountSys]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseVatmountSys = new core_1.ComplexTypeNumberPropertyField('BaseVatmountSys', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxDataWtx.baseVatmountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseVatmountFc = new core_1.ComplexTypeNumberPropertyField('BaseVatmountFC', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxDataWtx.baseVatmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseVatmount = new core_1.ComplexTypeNumberPropertyField('BaseVatmount', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxDataWtx.accumBaseAmountSys]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accumBaseAmountSys = new core_1.ComplexTypeNumberPropertyField('AccumBaseAmountSys', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxDataWtx.accumBaseAmountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accumBaseAmountFc = new core_1.ComplexTypeNumberPropertyField('AccumBaseAmountFC', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxDataWtx.accumBaseAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accumBaseAmount = new core_1.ComplexTypeNumberPropertyField('AccumBaseAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxDataWtx.accumWTaxAmountSys]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accumWTaxAmountSys = new core_1.ComplexTypeNumberPropertyField('AccumWTaxAmountSys', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxDataWtx.accumWTaxAmountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accumWTaxAmountFc = new core_1.ComplexTypeNumberPropertyField('AccumWTaxAmountFC', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxDataWtx.accumWTaxAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accumWTaxAmount = new core_1.ComplexTypeNumberPropertyField('AccumWTaxAmount', _this, 'Edm.Double');
        return _this;
    }
    return WithholdingTaxDataWtxField;
}(core_1.ComplexTypeField));
exports.WithholdingTaxDataWtxField = WithholdingTaxDataWtxField;
var WithholdingTaxDataWtx;
(function (WithholdingTaxDataWtx) {
    /**
     * Metadata information on all properties of the `WithholdingTaxDataWtx` complex type.
     */
    WithholdingTaxDataWtx._propertyMetadata = [{
            originalName: 'WTAmountSys',
            name: 'wtAmountSys',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'WTAmountFC',
            name: 'wtAmountFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'WTAmount',
            name: 'wtAmount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'WithholdingType',
            name: 'withholdingType',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TaxableAmountinSys',
            name: 'taxableAmountinSys',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'TaxableAmountFC',
            name: 'taxableAmountFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'TaxableAmount',
            name: 'taxableAmount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Rate',
            name: 'rate',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Category',
            name: 'category',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BaseType',
            name: 'baseType',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'AppliedWTAmountSys',
            name: 'appliedWtAmountSys',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'AppliedWTAmountFC',
            name: 'appliedWtAmountFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'AppliedWTAmount',
            name: 'appliedWtAmount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'GLAccount',
            name: 'glAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'LineNum',
            name: 'lineNum',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'BaseDocEntry',
            name: 'baseDocEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'BaseDocLine',
            name: 'baseDocLine',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'BaseDocType',
            name: 'baseDocType',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'WTAbsId',
            name: 'wtAbsId',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ExemptRate',
            name: 'exemptRate',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'BaseNetAmountSys',
            name: 'baseNetAmountSys',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'BaseNetAmountFC',
            name: 'baseNetAmountFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'BaseNetAmount',
            name: 'baseNetAmount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'BaseVatmountSys',
            name: 'baseVatmountSys',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'BaseVatmountFC',
            name: 'baseVatmountFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'BaseVatmount',
            name: 'baseVatmount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'AccumBaseAmountSys',
            name: 'accumBaseAmountSys',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'AccumBaseAmountFC',
            name: 'accumBaseAmountFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'AccumBaseAmount',
            name: 'accumBaseAmount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'AccumWTaxAmountSys',
            name: 'accumWTaxAmountSys',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'AccumWTaxAmountFC',
            name: 'accumWTaxAmountFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'AccumWTaxAmount',
            name: 'accumWTaxAmount',
            type: 'Edm.Double',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, WithholdingTaxDataWtx);
    }
    WithholdingTaxDataWtx.build = build;
})(WithholdingTaxDataWtx = exports.WithholdingTaxDataWtx || (exports.WithholdingTaxDataWtx = {}));
//# sourceMappingURL=WithholdingTaxDataWtx.js.map
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
exports.InventoryCountingLineUoM = exports.InventoryCountingLineUoMField = exports.createInventoryCountingLineUoM = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[InventoryCountingLineUoM.build]] instead.
 */
function createInventoryCountingLineUoM(json) {
    return InventoryCountingLineUoM.build(json);
}
exports.createInventoryCountingLineUoM = createInventoryCountingLineUoM;
/**
 * InventoryCountingLineUoMField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var InventoryCountingLineUoMField = /** @class */ (function (_super) {
    __extends(InventoryCountingLineUoMField, _super);
    /**
     * Creates an instance of InventoryCountingLineUoMField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function InventoryCountingLineUoMField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, InventoryCountingLineUoM) || this;
        /**
         * Representation of the [[InventoryCountingLineUoM.documentEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentEntry = new core_1.ComplexTypeNumberPropertyField('DocumentEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryCountingLineUoM.lineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNumber = new core_1.ComplexTypeNumberPropertyField('LineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryCountingLineUoM.childNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.childNumber = new core_1.ComplexTypeNumberPropertyField('ChildNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryCountingLineUoM.uoMCountedQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.uoMCountedQuantity = new core_1.ComplexTypeNumberPropertyField('UoMCountedQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[InventoryCountingLineUoM.itemsPerUnit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemsPerUnit = new core_1.ComplexTypeNumberPropertyField('ItemsPerUnit', _this, 'Edm.Double');
        /**
         * Representation of the [[InventoryCountingLineUoM.countedQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.countedQuantity = new core_1.ComplexTypeNumberPropertyField('CountedQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[InventoryCountingLineUoM.uoMCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.uoMCode = new core_1.ComplexTypeStringPropertyField('UoMCode', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryCountingLineUoM.barCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.barCode = new core_1.ComplexTypeStringPropertyField('BarCode', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryCountingLineUoM.counterType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.counterType = new core_1.ComplexTypeEnumPropertyField('CounterType', _this);
        /**
         * Representation of the [[InventoryCountingLineUoM.counterId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.counterId = new core_1.ComplexTypeNumberPropertyField('CounterID', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryCountingLineUoM.multipleCounterRole]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.multipleCounterRole = new core_1.ComplexTypeEnumPropertyField('MultipleCounterRole', _this);
        return _this;
    }
    return InventoryCountingLineUoMField;
}(core_1.ComplexTypeField));
exports.InventoryCountingLineUoMField = InventoryCountingLineUoMField;
var InventoryCountingLineUoM;
(function (InventoryCountingLineUoM) {
    /**
     * Metadata information on all properties of the `InventoryCountingLineUoM` complex type.
     */
    InventoryCountingLineUoM._propertyMetadata = [{
            originalName: 'DocumentEntry',
            name: 'documentEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'LineNumber',
            name: 'lineNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ChildNumber',
            name: 'childNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'UoMCountedQuantity',
            name: 'uoMCountedQuantity',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'ItemsPerUnit',
            name: 'itemsPerUnit',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'CountedQuantity',
            name: 'countedQuantity',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'UoMCode',
            name: 'uoMCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BarCode',
            name: 'barCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CounterType',
            name: 'counterType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'CounterID',
            name: 'counterId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'MultipleCounterRole',
            name: 'multipleCounterRole',
            type: 'Edm.Enum',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, InventoryCountingLineUoM);
    }
    InventoryCountingLineUoM.build = build;
})(InventoryCountingLineUoM = exports.InventoryCountingLineUoM || (exports.InventoryCountingLineUoM = {}));
//# sourceMappingURL=InventoryCountingLineUoM.js.map
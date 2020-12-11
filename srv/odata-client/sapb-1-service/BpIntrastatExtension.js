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
exports.BpIntrastatExtension = exports.BpIntrastatExtensionField = exports.createBpIntrastatExtension = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[BpIntrastatExtension.build]] instead.
 */
function createBpIntrastatExtension(json) {
    return BpIntrastatExtension.build(json);
}
exports.createBpIntrastatExtension = createBpIntrastatExtension;
/**
 * BpIntrastatExtensionField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var BpIntrastatExtensionField = /** @class */ (function (_super) {
    __extends(BpIntrastatExtensionField, _super);
    /**
     * Creates an instance of BpIntrastatExtensionField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function BpIntrastatExtensionField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, BpIntrastatExtension) || this;
        /**
         * Representation of the [[BpIntrastatExtension.cardCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cardCode = new core_1.ComplexTypeStringPropertyField('CardCode', _this, 'Edm.String');
        /**
         * Representation of the [[BpIntrastatExtension.transportMode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.transportMode = new core_1.ComplexTypeNumberPropertyField('TransportMode', _this, 'Edm.Int32');
        /**
         * Representation of the [[BpIntrastatExtension.incoterms]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.incoterms = new core_1.ComplexTypeNumberPropertyField('Incoterms', _this, 'Edm.Int32');
        /**
         * Representation of the [[BpIntrastatExtension.natureOfTransactions]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.natureOfTransactions = new core_1.ComplexTypeNumberPropertyField('NatureOfTransactions', _this, 'Edm.Int32');
        /**
         * Representation of the [[BpIntrastatExtension.statisticalProcedure]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.statisticalProcedure = new core_1.ComplexTypeNumberPropertyField('StatisticalProcedure', _this, 'Edm.Int32');
        /**
         * Representation of the [[BpIntrastatExtension.customsProcedure]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.customsProcedure = new core_1.ComplexTypeNumberPropertyField('CustomsProcedure', _this, 'Edm.Int32');
        /**
         * Representation of the [[BpIntrastatExtension.portOfEntryOrExit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.portOfEntryOrExit = new core_1.ComplexTypeNumberPropertyField('PortOfEntryOrExit', _this, 'Edm.Int32');
        /**
         * Representation of the [[BpIntrastatExtension.domesticOrForeignId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.domesticOrForeignId = new core_1.ComplexTypeStringPropertyField('DomesticOrForeignID', _this, 'Edm.String');
        /**
         * Representation of the [[BpIntrastatExtension.intrastatRelevant]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.intrastatRelevant = new core_1.ComplexTypeEnumPropertyField('IntrastatRelevant', _this);
        return _this;
    }
    return BpIntrastatExtensionField;
}(core_1.ComplexTypeField));
exports.BpIntrastatExtensionField = BpIntrastatExtensionField;
var BpIntrastatExtension;
(function (BpIntrastatExtension) {
    /**
     * Metadata information on all properties of the `BpIntrastatExtension` complex type.
     */
    BpIntrastatExtension._propertyMetadata = [{
            originalName: 'CardCode',
            name: 'cardCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TransportMode',
            name: 'transportMode',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Incoterms',
            name: 'incoterms',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'NatureOfTransactions',
            name: 'natureOfTransactions',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'StatisticalProcedure',
            name: 'statisticalProcedure',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'CustomsProcedure',
            name: 'customsProcedure',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'PortOfEntryOrExit',
            name: 'portOfEntryOrExit',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'DomesticOrForeignID',
            name: 'domesticOrForeignId',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'IntrastatRelevant',
            name: 'intrastatRelevant',
            type: 'Edm.Enum',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, BpIntrastatExtension);
    }
    BpIntrastatExtension.build = build;
})(BpIntrastatExtension = exports.BpIntrastatExtension || (exports.BpIntrastatExtension = {}));
//# sourceMappingURL=BpIntrastatExtension.js.map
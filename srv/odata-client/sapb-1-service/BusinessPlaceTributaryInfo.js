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
exports.BusinessPlaceTributaryInfo = exports.BusinessPlaceTributaryInfoField = exports.createBusinessPlaceTributaryInfo = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[BusinessPlaceTributaryInfo.build]] instead.
 */
function createBusinessPlaceTributaryInfo(json) {
    return BusinessPlaceTributaryInfo.build(json);
}
exports.createBusinessPlaceTributaryInfo = createBusinessPlaceTributaryInfo;
/**
 * BusinessPlaceTributaryInfoField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var BusinessPlaceTributaryInfoField = /** @class */ (function (_super) {
    __extends(BusinessPlaceTributaryInfoField, _super);
    /**
     * Creates an instance of BusinessPlaceTributaryInfoField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function BusinessPlaceTributaryInfoField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, BusinessPlaceTributaryInfo) || this;
        /**
         * Representation of the [[BusinessPlaceTributaryInfo.bplid]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bplid = new core_1.ComplexTypeNumberPropertyField('BPLID', _this, 'Edm.Int32');
        /**
         * Representation of the [[BusinessPlaceTributaryInfo.tributaryId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.tributaryId = new core_1.ComplexTypeNumberPropertyField('TributaryID', _this, 'Edm.Int32');
        /**
         * Representation of the [[BusinessPlaceTributaryInfo.tributaryType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.tributaryType = new core_1.ComplexTypeNumberPropertyField('TributaryType', _this, 'Edm.Int32');
        /**
         * Representation of the [[BusinessPlaceTributaryInfo.ttStartDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.ttStartDate = new core_1.ComplexTypeDatePropertyField('TTStartDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[BusinessPlaceTributaryInfo.ttEndDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.ttEndDate = new core_1.ComplexTypeDatePropertyField('TTEndDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[BusinessPlaceTributaryInfo.tributaryRegimeCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.tributaryRegimeCode = new core_1.ComplexTypeNumberPropertyField('TributaryRegimeCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[BusinessPlaceTributaryInfo.trcStartDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.trcStartDate = new core_1.ComplexTypeDatePropertyField('TRCStartDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[BusinessPlaceTributaryInfo.trcEndDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.trcEndDate = new core_1.ComplexTypeDatePropertyField('TRCEndDate', _this, 'Edm.DateTimeOffset');
        return _this;
    }
    return BusinessPlaceTributaryInfoField;
}(core_1.ComplexTypeField));
exports.BusinessPlaceTributaryInfoField = BusinessPlaceTributaryInfoField;
var BusinessPlaceTributaryInfo;
(function (BusinessPlaceTributaryInfo) {
    /**
     * Metadata information on all properties of the `BusinessPlaceTributaryInfo` complex type.
     */
    BusinessPlaceTributaryInfo._propertyMetadata = [{
            originalName: 'BPLID',
            name: 'bplid',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'TributaryID',
            name: 'tributaryId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'TributaryType',
            name: 'tributaryType',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'TTStartDate',
            name: 'ttStartDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'TTEndDate',
            name: 'ttEndDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'TributaryRegimeCode',
            name: 'tributaryRegimeCode',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'TRCStartDate',
            name: 'trcStartDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'TRCEndDate',
            name: 'trcEndDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, BusinessPlaceTributaryInfo);
    }
    BusinessPlaceTributaryInfo.build = build;
})(BusinessPlaceTributaryInfo = exports.BusinessPlaceTributaryInfo || (exports.BusinessPlaceTributaryInfo = {}));
//# sourceMappingURL=BusinessPlaceTributaryInfo.js.map
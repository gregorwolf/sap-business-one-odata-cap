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
exports.ExtendedTranslationParams = exports.ExtendedTranslationParamsField = exports.createExtendedTranslationParams = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[ExtendedTranslationParams.build]] instead.
 */
function createExtendedTranslationParams(json) {
    return ExtendedTranslationParams.build(json);
}
exports.createExtendedTranslationParams = createExtendedTranslationParams;
/**
 * ExtendedTranslationParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ExtendedTranslationParamsField = /** @class */ (function (_super) {
    __extends(ExtendedTranslationParamsField, _super);
    /**
     * Creates an instance of ExtendedTranslationParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ExtendedTranslationParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ExtendedTranslationParams) || this;
        /**
         * Representation of the [[ExtendedTranslationParams.docEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docEntry = new core_1.ComplexTypeNumberPropertyField('DocEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[ExtendedTranslationParams.category]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.category = new core_1.ComplexTypeEnumPropertyField('Category', _this);
        /**
         * Representation of the [[ExtendedTranslationParams.id]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.id = new core_1.ComplexTypeStringPropertyField('ID', _this, 'Edm.String');
        /**
         * Representation of the [[ExtendedTranslationParams.secondaryId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.secondaryId = new core_1.ComplexTypeStringPropertyField('SecondaryID', _this, 'Edm.String');
        return _this;
    }
    return ExtendedTranslationParamsField;
}(core_1.ComplexTypeField));
exports.ExtendedTranslationParamsField = ExtendedTranslationParamsField;
var ExtendedTranslationParams;
(function (ExtendedTranslationParams) {
    /**
     * Metadata information on all properties of the `ExtendedTranslationParams` complex type.
     */
    ExtendedTranslationParams._propertyMetadata = [{
            originalName: 'DocEntry',
            name: 'docEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Category',
            name: 'category',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'ID',
            name: 'id',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'SecondaryID',
            name: 'secondaryId',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ExtendedTranslationParams);
    }
    ExtendedTranslationParams.build = build;
})(ExtendedTranslationParams = exports.ExtendedTranslationParams || (exports.ExtendedTranslationParams = {}));
//# sourceMappingURL=ExtendedTranslationParams.js.map
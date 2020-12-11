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
exports.CampaignResponseTypeParams = exports.CampaignResponseTypeParamsField = exports.createCampaignResponseTypeParams = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[CampaignResponseTypeParams.build]] instead.
 */
function createCampaignResponseTypeParams(json) {
    return CampaignResponseTypeParams.build(json);
}
exports.createCampaignResponseTypeParams = createCampaignResponseTypeParams;
/**
 * CampaignResponseTypeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var CampaignResponseTypeParamsField = /** @class */ (function (_super) {
    __extends(CampaignResponseTypeParamsField, _super);
    /**
     * Creates an instance of CampaignResponseTypeParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function CampaignResponseTypeParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, CampaignResponseTypeParams) || this;
        /**
         * Representation of the [[CampaignResponseTypeParams.responseType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.responseType = new core_1.ComplexTypeStringPropertyField('ResponseType', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignResponseTypeParams.responseTypeDescription]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.responseTypeDescription = new core_1.ComplexTypeStringPropertyField('ResponseTypeDescription', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignResponseTypeParams.isActive]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.isActive = new core_1.ComplexTypeEnumPropertyField('IsActive', _this);
        return _this;
    }
    return CampaignResponseTypeParamsField;
}(core_1.ComplexTypeField));
exports.CampaignResponseTypeParamsField = CampaignResponseTypeParamsField;
var CampaignResponseTypeParams;
(function (CampaignResponseTypeParams) {
    /**
     * Metadata information on all properties of the `CampaignResponseTypeParams` complex type.
     */
    CampaignResponseTypeParams._propertyMetadata = [{
            originalName: 'ResponseType',
            name: 'responseType',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ResponseTypeDescription',
            name: 'responseTypeDescription',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'IsActive',
            name: 'isActive',
            type: 'Edm.Enum',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, CampaignResponseTypeParams);
    }
    CampaignResponseTypeParams.build = build;
})(CampaignResponseTypeParams = exports.CampaignResponseTypeParams || (exports.CampaignResponseTypeParams = {}));
//# sourceMappingURL=CampaignResponseTypeParams.js.map
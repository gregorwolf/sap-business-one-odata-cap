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
exports.CampaignPartner = exports.CampaignPartnerField = exports.createCampaignPartner = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[CampaignPartner.build]] instead.
 */
function createCampaignPartner(json) {
    return CampaignPartner.build(json);
}
exports.createCampaignPartner = createCampaignPartner;
/**
 * CampaignPartnerField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var CampaignPartnerField = /** @class */ (function (_super) {
    __extends(CampaignPartnerField, _super);
    /**
     * Creates an instance of CampaignPartnerField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function CampaignPartnerField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, CampaignPartner) || this;
        /**
         * Representation of the [[CampaignPartner.campaignNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.campaignNumber = new core_1.ComplexTypeNumberPropertyField('CampaignNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[CampaignPartner.campaignLineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.campaignLineNumber = new core_1.ComplexTypeNumberPropertyField('CampaignLineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[CampaignPartner.partnerId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.partnerId = new core_1.ComplexTypeNumberPropertyField('PartnerID', _this, 'Edm.Int32');
        /**
         * Representation of the [[CampaignPartner.relationshipCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.relationshipCode = new core_1.ComplexTypeNumberPropertyField('RelationshipCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[CampaignPartner.relatedBp]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.relatedBp = new core_1.ComplexTypeStringPropertyField('RelatedBP', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignPartner.details]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.details = new core_1.ComplexTypeStringPropertyField('Details', _this, 'Edm.String');
        return _this;
    }
    return CampaignPartnerField;
}(core_1.ComplexTypeField));
exports.CampaignPartnerField = CampaignPartnerField;
var CampaignPartner;
(function (CampaignPartner) {
    /**
     * Metadata information on all properties of the `CampaignPartner` complex type.
     */
    CampaignPartner._propertyMetadata = [{
            originalName: 'CampaignNumber',
            name: 'campaignNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'CampaignLineNumber',
            name: 'campaignLineNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'PartnerID',
            name: 'partnerId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'RelationshipCode',
            name: 'relationshipCode',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'RelatedBP',
            name: 'relatedBp',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Details',
            name: 'details',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, CampaignPartner);
    }
    CampaignPartner.build = build;
})(CampaignPartner = exports.CampaignPartner || (exports.CampaignPartner = {}));
//# sourceMappingURL=CampaignPartner.js.map
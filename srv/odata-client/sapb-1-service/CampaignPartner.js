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
exports.CampaignPartner = exports.CampaignPartnerField = exports.createCampaignPartner = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function CampaignPartnerField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[CampaignPartner.campaignNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.campaignNumber = new v4_1.ComplexTypeNumberPropertyField('CampaignNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[CampaignPartner.campaignLineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.campaignLineNumber = new v4_1.ComplexTypeNumberPropertyField('CampaignLineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[CampaignPartner.partnerId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.partnerId = new v4_1.ComplexTypeNumberPropertyField('PartnerID', _this, 'Edm.Int32');
        /**
         * Representation of the [[CampaignPartner.relationshipCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.relationshipCode = new v4_1.ComplexTypeNumberPropertyField('RelationshipCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[CampaignPartner.relatedBp]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.relatedBp = new v4_1.ComplexTypeStringPropertyField('RelatedBP', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignPartner.details]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.details = new v4_1.ComplexTypeStringPropertyField('Details', _this, 'Edm.String');
        return _this;
    }
    return CampaignPartnerField;
}(v4_1.ComplexTypeField));
exports.CampaignPartnerField = CampaignPartnerField;
var CampaignPartner;
(function (CampaignPartner) {
    function build(json) {
        return v4_1.createComplexType(json, {
            CampaignNumber: function (campaignNumber) { return ({ campaignNumber: v4_1.edmToTs(campaignNumber, 'Edm.Int32') }); },
            CampaignLineNumber: function (campaignLineNumber) { return ({ campaignLineNumber: v4_1.edmToTs(campaignLineNumber, 'Edm.Int32') }); },
            PartnerID: function (partnerId) { return ({ partnerId: v4_1.edmToTs(partnerId, 'Edm.Int32') }); },
            RelationshipCode: function (relationshipCode) { return ({ relationshipCode: v4_1.edmToTs(relationshipCode, 'Edm.Int32') }); },
            RelatedBP: function (relatedBp) { return ({ relatedBp: v4_1.edmToTs(relatedBp, 'Edm.String') }); },
            Details: function (details) { return ({ details: v4_1.edmToTs(details, 'Edm.String') }); }
        });
    }
    CampaignPartner.build = build;
})(CampaignPartner = exports.CampaignPartner || (exports.CampaignPartner = {}));
//# sourceMappingURL=CampaignPartner.js.map
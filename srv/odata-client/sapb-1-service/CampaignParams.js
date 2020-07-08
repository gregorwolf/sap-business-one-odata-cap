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
exports.CampaignParams = exports.CampaignParamsField = exports.createCampaignParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[CampaignParams.build]] instead.
 */
function createCampaignParams(json) {
    return CampaignParams.build(json);
}
exports.createCampaignParams = createCampaignParams;
/**
 * CampaignParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var CampaignParamsField = /** @class */ (function (_super) {
    __extends(CampaignParamsField, _super);
    function CampaignParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[CampaignParams.campaignNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.campaignNumber = new v4_1.ComplexTypeNumberPropertyField('CampaignNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[CampaignParams.campaignName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.campaignName = new v4_1.ComplexTypeStringPropertyField('CampaignName', _this, 'Edm.String');
        return _this;
    }
    return CampaignParamsField;
}(v4_1.ComplexTypeField));
exports.CampaignParamsField = CampaignParamsField;
var CampaignParams;
(function (CampaignParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            CampaignNumber: function (campaignNumber) { return ({ campaignNumber: v4_1.edmToTs(campaignNumber, 'Edm.Int32') }); },
            CampaignName: function (campaignName) { return ({ campaignName: v4_1.edmToTs(campaignName, 'Edm.String') }); }
        });
    }
    CampaignParams.build = build;
})(CampaignParams = exports.CampaignParams || (exports.CampaignParams = {}));
//# sourceMappingURL=CampaignParams.js.map
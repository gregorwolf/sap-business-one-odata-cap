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
exports.CampaignItem = exports.CampaignItemField = exports.createCampaignItem = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[CampaignItem.build]] instead.
 */
function createCampaignItem(json) {
    return CampaignItem.build(json);
}
exports.createCampaignItem = createCampaignItem;
/**
 * CampaignItemField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var CampaignItemField = /** @class */ (function (_super) {
    __extends(CampaignItemField, _super);
    function CampaignItemField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[CampaignItem.campaignNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.campaignNumber = new v4_1.ComplexTypeNumberPropertyField('CampaignNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[CampaignItem.campaignLineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.campaignLineNumber = new v4_1.ComplexTypeNumberPropertyField('CampaignLineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[CampaignItem.itemCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemCode = new v4_1.ComplexTypeStringPropertyField('ItemCode', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignItem.itemName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemName = new v4_1.ComplexTypeStringPropertyField('ItemName', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignItem.itemGroup]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemGroup = new v4_1.ComplexTypeStringPropertyField('ItemGroup', _this, 'Edm.String');
        return _this;
    }
    return CampaignItemField;
}(v4_1.ComplexTypeField));
exports.CampaignItemField = CampaignItemField;
var CampaignItem;
(function (CampaignItem) {
    function build(json) {
        return v4_1.createComplexType(json, {
            CampaignNumber: function (campaignNumber) { return ({ campaignNumber: v4_1.edmToTs(campaignNumber, 'Edm.Int32') }); },
            CampaignLineNumber: function (campaignLineNumber) { return ({ campaignLineNumber: v4_1.edmToTs(campaignLineNumber, 'Edm.Int32') }); },
            ItemCode: function (itemCode) { return ({ itemCode: v4_1.edmToTs(itemCode, 'Edm.String') }); },
            ItemName: function (itemName) { return ({ itemName: v4_1.edmToTs(itemName, 'Edm.String') }); },
            ItemGroup: function (itemGroup) { return ({ itemGroup: v4_1.edmToTs(itemGroup, 'Edm.String') }); }
        });
    }
    CampaignItem.build = build;
})(CampaignItem = exports.CampaignItem || (exports.CampaignItem = {}));
//# sourceMappingURL=CampaignItem.js.map
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
exports.WtGroups = exports.WtGroupsField = exports.createWtGroups = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var DocsInWtGroups_1 = require("./DocsInWtGroups");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[WtGroups.build]] instead.
 */
function createWtGroups(json) {
    return WtGroups.build(json);
}
exports.createWtGroups = createWtGroups;
/**
 * WtGroupsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var WtGroupsField = /** @class */ (function (_super) {
    __extends(WtGroupsField, _super);
    function WtGroupsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[WtGroups.wtAbsEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wtAbsEntry = new v4_1.ComplexTypeNumberPropertyField('WTAbsEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[WtGroups.percent]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.percent = new v4_1.ComplexTypeNumberPropertyField('Percent', _this, 'Edm.Double');
        /**
         * Representation of the [[WtGroups.sumVatAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sumVatAmount = new v4_1.ComplexTypeNumberPropertyField('SumVATAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[WtGroups.sumDocTotal]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sumDocTotal = new v4_1.ComplexTypeNumberPropertyField('SumDocTotal', _this, 'Edm.Double');
        /**
         * Representation of the [[WtGroups.sumBaseAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sumBaseAmount = new v4_1.ComplexTypeNumberPropertyField('SumBaseAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[WtGroups.sumAccumAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sumAccumAmount = new v4_1.ComplexTypeNumberPropertyField('SumAccumAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[WtGroups.sumPerceptAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sumPerceptAmount = new v4_1.ComplexTypeNumberPropertyField('SumPerceptAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[WtGroups.docsInWtGroupsCollection]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docsInWtGroupsCollection = new DocsInWtGroups_1.DocsInWtGroupsField('DocsInWTGroupsCollection', _this);
        return _this;
    }
    return WtGroupsField;
}(v4_1.ComplexTypeField));
exports.WtGroupsField = WtGroupsField;
var WtGroups;
(function (WtGroups) {
    function build(json) {
        return v4_1.createComplexType(json, {
            WTAbsEntry: function (wtAbsEntry) { return ({ wtAbsEntry: v4_1.edmToTs(wtAbsEntry, 'Edm.Int32') }); },
            Percent: function (percent) { return ({ percent: v4_1.edmToTs(percent, 'Edm.Double') }); },
            SumVATAmount: function (sumVatAmount) { return ({ sumVatAmount: v4_1.edmToTs(sumVatAmount, 'Edm.Double') }); },
            SumDocTotal: function (sumDocTotal) { return ({ sumDocTotal: v4_1.edmToTs(sumDocTotal, 'Edm.Double') }); },
            SumBaseAmount: function (sumBaseAmount) { return ({ sumBaseAmount: v4_1.edmToTs(sumBaseAmount, 'Edm.Double') }); },
            SumAccumAmount: function (sumAccumAmount) { return ({ sumAccumAmount: v4_1.edmToTs(sumAccumAmount, 'Edm.Double') }); },
            SumPerceptAmount: function (sumPerceptAmount) { return ({ sumPerceptAmount: v4_1.edmToTs(sumPerceptAmount, 'Edm.Double') }); },
            DocsInWTGroupsCollection: function (docsInWtGroupsCollection) { return ({ docsInWtGroupsCollection: DocsInWtGroups_1.DocsInWtGroups.build(docsInWtGroupsCollection) }); }
        });
    }
    WtGroups.build = build;
})(WtGroups = exports.WtGroups || (exports.WtGroups = {}));
//# sourceMappingURL=WtGroups.js.map
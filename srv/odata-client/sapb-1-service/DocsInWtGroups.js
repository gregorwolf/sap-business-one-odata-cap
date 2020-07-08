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
exports.DocsInWtGroups = exports.DocsInWtGroupsField = exports.createDocsInWtGroups = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[DocsInWtGroups.build]] instead.
 */
function createDocsInWtGroups(json) {
    return DocsInWtGroups.build(json);
}
exports.createDocsInWtGroups = createDocsInWtGroups;
/**
 * DocsInWtGroupsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var DocsInWtGroupsField = /** @class */ (function (_super) {
    __extends(DocsInWtGroupsField, _super);
    function DocsInWtGroupsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[DocsInWtGroups.docEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docEntry = new v4_1.ComplexTypeNumberPropertyField('DocEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocsInWtGroups.docObjType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docObjType = new v4_1.ComplexTypeStringPropertyField('DocObjType', _this, 'Edm.String');
        /**
         * Representation of the [[DocsInWtGroups.vatAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.vatAmount = new v4_1.ComplexTypeNumberPropertyField('VATAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[DocsInWtGroups.docTotal]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docTotal = new v4_1.ComplexTypeNumberPropertyField('DocTotal', _this, 'Edm.Double');
        /**
         * Representation of the [[DocsInWtGroups.baseAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseAmount = new v4_1.ComplexTypeNumberPropertyField('BaseAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[DocsInWtGroups.accumAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accumAmount = new v4_1.ComplexTypeNumberPropertyField('AccumAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[DocsInWtGroups.perceptAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.perceptAmount = new v4_1.ComplexTypeNumberPropertyField('PerceptAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[DocsInWtGroups.percent]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.percent = new v4_1.ComplexTypeNumberPropertyField('Percent', _this, 'Edm.Double');
        return _this;
    }
    return DocsInWtGroupsField;
}(v4_1.ComplexTypeField));
exports.DocsInWtGroupsField = DocsInWtGroupsField;
var DocsInWtGroups;
(function (DocsInWtGroups) {
    function build(json) {
        return v4_1.createComplexType(json, {
            DocEntry: function (docEntry) { return ({ docEntry: v4_1.edmToTs(docEntry, 'Edm.Int32') }); },
            DocObjType: function (docObjType) { return ({ docObjType: v4_1.edmToTs(docObjType, 'Edm.String') }); },
            VATAmount: function (vatAmount) { return ({ vatAmount: v4_1.edmToTs(vatAmount, 'Edm.Double') }); },
            DocTotal: function (docTotal) { return ({ docTotal: v4_1.edmToTs(docTotal, 'Edm.Double') }); },
            BaseAmount: function (baseAmount) { return ({ baseAmount: v4_1.edmToTs(baseAmount, 'Edm.Double') }); },
            AccumAmount: function (accumAmount) { return ({ accumAmount: v4_1.edmToTs(accumAmount, 'Edm.Double') }); },
            PerceptAmount: function (perceptAmount) { return ({ perceptAmount: v4_1.edmToTs(perceptAmount, 'Edm.Double') }); },
            Percent: function (percent) { return ({ percent: v4_1.edmToTs(percent, 'Edm.Double') }); }
        });
    }
    DocsInWtGroups.build = build;
})(DocsInWtGroups = exports.DocsInWtGroups || (exports.DocsInWtGroups = {}));
//# sourceMappingURL=DocsInWtGroups.js.map
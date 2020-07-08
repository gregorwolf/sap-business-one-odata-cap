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
exports.AccountSegmentationsCategory = exports.AccountSegmentationsCategoryField = exports.createAccountSegmentationsCategory = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[AccountSegmentationsCategory.build]] instead.
 */
function createAccountSegmentationsCategory(json) {
    return AccountSegmentationsCategory.build(json);
}
exports.createAccountSegmentationsCategory = createAccountSegmentationsCategory;
/**
 * AccountSegmentationsCategoryField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var AccountSegmentationsCategoryField = /** @class */ (function (_super) {
    __extends(AccountSegmentationsCategoryField, _super);
    function AccountSegmentationsCategoryField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[AccountSegmentationsCategory.segmentId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.segmentId = new v4_1.ComplexTypeNumberPropertyField('SegmentID', _this, 'Edm.Int32');
        /**
         * Representation of the [[AccountSegmentationsCategory.code]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.code = new v4_1.ComplexTypeStringPropertyField('Code', _this, 'Edm.String');
        /**
         * Representation of the [[AccountSegmentationsCategory.name]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.name = new v4_1.ComplexTypeStringPropertyField('Name', _this, 'Edm.String');
        /**
         * Representation of the [[AccountSegmentationsCategory.shortName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shortName = new v4_1.ComplexTypeStringPropertyField('ShortName', _this, 'Edm.String');
        return _this;
    }
    return AccountSegmentationsCategoryField;
}(v4_1.ComplexTypeField));
exports.AccountSegmentationsCategoryField = AccountSegmentationsCategoryField;
var AccountSegmentationsCategory;
(function (AccountSegmentationsCategory) {
    function build(json) {
        return v4_1.createComplexType(json, {
            SegmentID: function (segmentId) { return ({ segmentId: v4_1.edmToTs(segmentId, 'Edm.Int32') }); },
            Code: function (code) { return ({ code: v4_1.edmToTs(code, 'Edm.String') }); },
            Name: function (name) { return ({ name: v4_1.edmToTs(name, 'Edm.String') }); },
            ShortName: function (shortName) { return ({ shortName: v4_1.edmToTs(shortName, 'Edm.String') }); }
        });
    }
    AccountSegmentationsCategory.build = build;
})(AccountSegmentationsCategory = exports.AccountSegmentationsCategory || (exports.AccountSegmentationsCategory = {}));
//# sourceMappingURL=AccountSegmentationsCategory.js.map
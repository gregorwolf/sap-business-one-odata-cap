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
exports.AlternativeItem = exports.AlternativeItemField = exports.createAlternativeItem = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[AlternativeItem.build]] instead.
 */
function createAlternativeItem(json) {
    return AlternativeItem.build(json);
}
exports.createAlternativeItem = createAlternativeItem;
/**
 * AlternativeItemField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var AlternativeItemField = /** @class */ (function (_super) {
    __extends(AlternativeItemField, _super);
    function AlternativeItemField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[AlternativeItem.alternativeItemCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.alternativeItemCode = new v4_1.ComplexTypeStringPropertyField('AlternativeItemCode', _this, 'Edm.String');
        /**
         * Representation of the [[AlternativeItem.matchFactor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.matchFactor = new v4_1.ComplexTypeNumberPropertyField('MatchFactor', _this, 'Edm.Double');
        /**
         * Representation of the [[AlternativeItem.remarks]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.remarks = new v4_1.ComplexTypeStringPropertyField('Remarks', _this, 'Edm.String');
        return _this;
    }
    return AlternativeItemField;
}(v4_1.ComplexTypeField));
exports.AlternativeItemField = AlternativeItemField;
var AlternativeItem;
(function (AlternativeItem) {
    function build(json) {
        return v4_1.createComplexType(json, {
            AlternativeItemCode: function (alternativeItemCode) { return ({ alternativeItemCode: v4_1.edmToTs(alternativeItemCode, 'Edm.String') }); },
            MatchFactor: function (matchFactor) { return ({ matchFactor: v4_1.edmToTs(matchFactor, 'Edm.Double') }); },
            Remarks: function (remarks) { return ({ remarks: v4_1.edmToTs(remarks, 'Edm.String') }); }
        });
    }
    AlternativeItem.build = build;
})(AlternativeItem = exports.AlternativeItem || (exports.AlternativeItem = {}));
//# sourceMappingURL=AlternativeItem.js.map
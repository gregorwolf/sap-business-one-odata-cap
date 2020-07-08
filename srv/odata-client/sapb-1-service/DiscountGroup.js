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
exports.DiscountGroup = exports.DiscountGroupField = exports.createDiscountGroup = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[DiscountGroup.build]] instead.
 */
function createDiscountGroup(json) {
    return DiscountGroup.build(json);
}
exports.createDiscountGroup = createDiscountGroup;
/**
 * DiscountGroupField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var DiscountGroupField = /** @class */ (function (_super) {
    __extends(DiscountGroupField, _super);
    function DiscountGroupField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[DiscountGroup.objectEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.objectEntry = new v4_1.ComplexTypeStringPropertyField('ObjectEntry', _this, 'Edm.String');
        /**
         * Representation of the [[DiscountGroup.discountPercentage]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.discountPercentage = new v4_1.ComplexTypeNumberPropertyField('DiscountPercentage', _this, 'Edm.Double');
        /**
         * Representation of the [[DiscountGroup.bpCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpCode = new v4_1.ComplexTypeStringPropertyField('BPCode', _this, 'Edm.String');
        return _this;
    }
    return DiscountGroupField;
}(v4_1.ComplexTypeField));
exports.DiscountGroupField = DiscountGroupField;
var DiscountGroup;
(function (DiscountGroup) {
    function build(json) {
        return v4_1.createComplexType(json, {
            ObjectEntry: function (objectEntry) { return ({ objectEntry: v4_1.edmToTs(objectEntry, 'Edm.String') }); },
            DiscountPercentage: function (discountPercentage) { return ({ discountPercentage: v4_1.edmToTs(discountPercentage, 'Edm.Double') }); },
            BPCode: function (bpCode) { return ({ bpCode: v4_1.edmToTs(bpCode, 'Edm.String') }); }
        });
    }
    DiscountGroup.build = build;
})(DiscountGroup = exports.DiscountGroup || (exports.DiscountGroup = {}));
//# sourceMappingURL=DiscountGroup.js.map
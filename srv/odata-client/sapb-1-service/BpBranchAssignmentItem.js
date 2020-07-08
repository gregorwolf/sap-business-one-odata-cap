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
exports.BpBranchAssignmentItem = exports.BpBranchAssignmentItemField = exports.createBpBranchAssignmentItem = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[BpBranchAssignmentItem.build]] instead.
 */
function createBpBranchAssignmentItem(json) {
    return BpBranchAssignmentItem.build(json);
}
exports.createBpBranchAssignmentItem = createBpBranchAssignmentItem;
/**
 * BpBranchAssignmentItemField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var BpBranchAssignmentItemField = /** @class */ (function (_super) {
    __extends(BpBranchAssignmentItemField, _super);
    function BpBranchAssignmentItemField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[BpBranchAssignmentItem.bpCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpCode = new v4_1.ComplexTypeStringPropertyField('BPCode', _this, 'Edm.String');
        /**
         * Representation of the [[BpBranchAssignmentItem.bplid]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bplid = new v4_1.ComplexTypeNumberPropertyField('BPLID', _this, 'Edm.Int32');
        return _this;
    }
    return BpBranchAssignmentItemField;
}(v4_1.ComplexTypeField));
exports.BpBranchAssignmentItemField = BpBranchAssignmentItemField;
var BpBranchAssignmentItem;
(function (BpBranchAssignmentItem) {
    function build(json) {
        return v4_1.createComplexType(json, {
            BPCode: function (bpCode) { return ({ bpCode: v4_1.edmToTs(bpCode, 'Edm.String') }); },
            BPLID: function (bplid) { return ({ bplid: v4_1.edmToTs(bplid, 'Edm.Int32') }); }
        });
    }
    BpBranchAssignmentItem.build = build;
})(BpBranchAssignmentItem = exports.BpBranchAssignmentItem || (exports.BpBranchAssignmentItem = {}));
//# sourceMappingURL=BpBranchAssignmentItem.js.map
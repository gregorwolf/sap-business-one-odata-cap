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
exports.ApprovalRequestLine = exports.ApprovalRequestLineField = exports.createApprovalRequestLine = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ApprovalRequestLine.build]] instead.
 */
function createApprovalRequestLine(json) {
    return ApprovalRequestLine.build(json);
}
exports.createApprovalRequestLine = createApprovalRequestLine;
/**
 * ApprovalRequestLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ApprovalRequestLineField = /** @class */ (function (_super) {
    __extends(ApprovalRequestLineField, _super);
    function ApprovalRequestLineField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ApprovalRequestLine.stageCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stageCode = new v4_1.ComplexTypeNumberPropertyField('StageCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[ApprovalRequestLine.userId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.userId = new v4_1.ComplexTypeNumberPropertyField('UserID', _this, 'Edm.Int32');
        /**
         * Representation of the [[ApprovalRequestLine.remarks]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.remarks = new v4_1.ComplexTypeStringPropertyField('Remarks', _this, 'Edm.String');
        /**
         * Representation of the [[ApprovalRequestLine.updateDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.updateDate = new v4_1.ComplexTypeDatePropertyField('UpdateDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ApprovalRequestLine.updateTime]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.updateTime = new v4_1.ComplexTypeTimePropertyField('UpdateTime', _this, 'Edm.TimeOfDay');
        /**
         * Representation of the [[ApprovalRequestLine.creationDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.creationDate = new v4_1.ComplexTypeDatePropertyField('CreationDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ApprovalRequestLine.creationTime]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.creationTime = new v4_1.ComplexTypeTimePropertyField('CreationTime', _this, 'Edm.TimeOfDay');
        return _this;
    }
    return ApprovalRequestLineField;
}(v4_1.ComplexTypeField));
exports.ApprovalRequestLineField = ApprovalRequestLineField;
var ApprovalRequestLine;
(function (ApprovalRequestLine) {
    function build(json) {
        return v4_1.createComplexType(json, {
            StageCode: function (stageCode) { return ({ stageCode: v4_1.edmToTs(stageCode, 'Edm.Int32') }); },
            UserID: function (userId) { return ({ userId: v4_1.edmToTs(userId, 'Edm.Int32') }); },
            Remarks: function (remarks) { return ({ remarks: v4_1.edmToTs(remarks, 'Edm.String') }); },
            UpdateDate: function (updateDate) { return ({ updateDate: v4_1.edmToTs(updateDate, 'Edm.DateTimeOffset') }); },
            UpdateTime: function (updateTime) { return ({ updateTime: v4_1.edmToTs(updateTime, 'Edm.TimeOfDay') }); },
            CreationDate: function (creationDate) { return ({ creationDate: v4_1.edmToTs(creationDate, 'Edm.DateTimeOffset') }); },
            CreationTime: function (creationTime) { return ({ creationTime: v4_1.edmToTs(creationTime, 'Edm.TimeOfDay') }); }
        });
    }
    ApprovalRequestLine.build = build;
})(ApprovalRequestLine = exports.ApprovalRequestLine || (exports.ApprovalRequestLine = {}));
//# sourceMappingURL=ApprovalRequestLine.js.map
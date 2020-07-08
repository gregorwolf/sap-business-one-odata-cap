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
exports.UserGroupByUserItem = exports.UserGroupByUserItemField = exports.createUserGroupByUserItem = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[UserGroupByUserItem.build]] instead.
 */
function createUserGroupByUserItem(json) {
    return UserGroupByUserItem.build(json);
}
exports.createUserGroupByUserItem = createUserGroupByUserItem;
/**
 * UserGroupByUserItemField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var UserGroupByUserItemField = /** @class */ (function (_super) {
    __extends(UserGroupByUserItemField, _super);
    function UserGroupByUserItemField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[UserGroupByUserItem.userId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.userId = new v4_1.ComplexTypeNumberPropertyField('USERId', _this, 'Edm.Int32');
        /**
         * Representation of the [[UserGroupByUserItem.groupId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.groupId = new v4_1.ComplexTypeNumberPropertyField('GroupId', _this, 'Edm.Int32');
        /**
         * Representation of the [[UserGroupByUserItem.startDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.startDate = new v4_1.ComplexTypeDatePropertyField('StartDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[UserGroupByUserItem.dueDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dueDate = new v4_1.ComplexTypeDatePropertyField('DueDate', _this, 'Edm.DateTimeOffset');
        return _this;
    }
    return UserGroupByUserItemField;
}(v4_1.ComplexTypeField));
exports.UserGroupByUserItemField = UserGroupByUserItemField;
var UserGroupByUserItem;
(function (UserGroupByUserItem) {
    function build(json) {
        return v4_1.createComplexType(json, {
            USERId: function (userId) { return ({ userId: v4_1.edmToTs(userId, 'Edm.Int32') }); },
            GroupId: function (groupId) { return ({ groupId: v4_1.edmToTs(groupId, 'Edm.Int32') }); },
            StartDate: function (startDate) { return ({ startDate: v4_1.edmToTs(startDate, 'Edm.DateTimeOffset') }); },
            DueDate: function (dueDate) { return ({ dueDate: v4_1.edmToTs(dueDate, 'Edm.DateTimeOffset') }); }
        });
    }
    UserGroupByUserItem.build = build;
})(UserGroupByUserItem = exports.UserGroupByUserItem || (exports.UserGroupByUserItem = {}));
//# sourceMappingURL=UserGroupByUserItem.js.map
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
exports.UserMenuItem = exports.UserMenuItemField = exports.createUserMenuItem = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[UserMenuItem.build]] instead.
 */
function createUserMenuItem(json) {
    return UserMenuItem.build(json);
}
exports.createUserMenuItem = createUserMenuItem;
/**
 * UserMenuItemField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var UserMenuItemField = /** @class */ (function (_super) {
    __extends(UserMenuItemField, _super);
    function UserMenuItemField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[UserMenuItem.name]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.name = new v4_1.ComplexTypeStringPropertyField('Name', _this, 'Edm.String');
        /**
         * Representation of the [[UserMenuItem.position]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.position = new v4_1.ComplexTypeNumberPropertyField('Position', _this, 'Edm.Int32');
        /**
         * Representation of the [[UserMenuItem.linkedObjType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.linkedObjType = new v4_1.ComplexTypeStringPropertyField('LinkedObjType', _this, 'Edm.String');
        /**
         * Representation of the [[UserMenuItem.linkedObjKey]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.linkedObjKey = new v4_1.ComplexTypeStringPropertyField('LinkedObjKey', _this, 'Edm.String');
        /**
         * Representation of the [[UserMenuItem.linkedFormMenuId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.linkedFormMenuId = new v4_1.ComplexTypeNumberPropertyField('LinkedFormMenuID', _this, 'Edm.Int32');
        /**
         * Representation of the [[UserMenuItem.linkedFormNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.linkedFormNum = new v4_1.ComplexTypeNumberPropertyField('LinkedFormNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[UserMenuItem.reportPath]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reportPath = new v4_1.ComplexTypeStringPropertyField('ReportPath', _this, 'Edm.String');
        return _this;
    }
    return UserMenuItemField;
}(v4_1.ComplexTypeField));
exports.UserMenuItemField = UserMenuItemField;
var UserMenuItem;
(function (UserMenuItem) {
    function build(json) {
        return v4_1.createComplexType(json, {
            Name: function (name) { return ({ name: v4_1.edmToTs(name, 'Edm.String') }); },
            Position: function (position) { return ({ position: v4_1.edmToTs(position, 'Edm.Int32') }); },
            LinkedObjType: function (linkedObjType) { return ({ linkedObjType: v4_1.edmToTs(linkedObjType, 'Edm.String') }); },
            LinkedObjKey: function (linkedObjKey) { return ({ linkedObjKey: v4_1.edmToTs(linkedObjKey, 'Edm.String') }); },
            LinkedFormMenuID: function (linkedFormMenuId) { return ({ linkedFormMenuId: v4_1.edmToTs(linkedFormMenuId, 'Edm.Int32') }); },
            LinkedFormNum: function (linkedFormNum) { return ({ linkedFormNum: v4_1.edmToTs(linkedFormNum, 'Edm.Int32') }); },
            ReportPath: function (reportPath) { return ({ reportPath: v4_1.edmToTs(reportPath, 'Edm.String') }); }
        });
    }
    UserMenuItem.build = build;
})(UserMenuItem = exports.UserMenuItem || (exports.UserMenuItem = {}));
//# sourceMappingURL=UserMenuItem.js.map
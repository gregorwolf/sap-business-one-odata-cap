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
exports.UserKeysMdElement = exports.UserKeysMdElementField = exports.createUserKeysMdElement = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[UserKeysMdElement.build]] instead.
 */
function createUserKeysMdElement(json) {
    return UserKeysMdElement.build(json);
}
exports.createUserKeysMdElement = createUserKeysMdElement;
/**
 * UserKeysMdElementField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var UserKeysMdElementField = /** @class */ (function (_super) {
    __extends(UserKeysMdElementField, _super);
    function UserKeysMdElementField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[UserKeysMdElement.subKeyIndex]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.subKeyIndex = new v4_1.ComplexTypeNumberPropertyField('SubKeyIndex', _this, 'Edm.Int32');
        /**
         * Representation of the [[UserKeysMdElement.columnAlias]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.columnAlias = new v4_1.ComplexTypeStringPropertyField('ColumnAlias', _this, 'Edm.String');
        return _this;
    }
    return UserKeysMdElementField;
}(v4_1.ComplexTypeField));
exports.UserKeysMdElementField = UserKeysMdElementField;
var UserKeysMdElement;
(function (UserKeysMdElement) {
    function build(json) {
        return v4_1.createComplexType(json, {
            SubKeyIndex: function (subKeyIndex) { return ({ subKeyIndex: v4_1.edmToTs(subKeyIndex, 'Edm.Int32') }); },
            ColumnAlias: function (columnAlias) { return ({ columnAlias: v4_1.edmToTs(columnAlias, 'Edm.String') }); }
        });
    }
    UserKeysMdElement.build = build;
})(UserKeysMdElement = exports.UserKeysMdElement || (exports.UserKeysMdElement = {}));
//# sourceMappingURL=UserKeysMdElement.js.map
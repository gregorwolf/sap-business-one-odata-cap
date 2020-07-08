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
exports.UserObjectMdFormColumn = exports.UserObjectMdFormColumnField = exports.createUserObjectMdFormColumn = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[UserObjectMdFormColumn.build]] instead.
 */
function createUserObjectMdFormColumn(json) {
    return UserObjectMdFormColumn.build(json);
}
exports.createUserObjectMdFormColumn = createUserObjectMdFormColumn;
/**
 * UserObjectMdFormColumnField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var UserObjectMdFormColumnField = /** @class */ (function (_super) {
    __extends(UserObjectMdFormColumnField, _super);
    function UserObjectMdFormColumnField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[UserObjectMdFormColumn.formColumnAlias]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.formColumnAlias = new v4_1.ComplexTypeStringPropertyField('FormColumnAlias', _this, 'Edm.String');
        /**
         * Representation of the [[UserObjectMdFormColumn.formColumnDescription]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.formColumnDescription = new v4_1.ComplexTypeStringPropertyField('FormColumnDescription', _this, 'Edm.String');
        /**
         * Representation of the [[UserObjectMdFormColumn.formColumnNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.formColumnNumber = new v4_1.ComplexTypeNumberPropertyField('FormColumnNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[UserObjectMdFormColumn.sonNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sonNumber = new v4_1.ComplexTypeNumberPropertyField('SonNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[UserObjectMdFormColumn.code]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.code = new v4_1.ComplexTypeStringPropertyField('Code', _this, 'Edm.String');
        return _this;
    }
    return UserObjectMdFormColumnField;
}(v4_1.ComplexTypeField));
exports.UserObjectMdFormColumnField = UserObjectMdFormColumnField;
var UserObjectMdFormColumn;
(function (UserObjectMdFormColumn) {
    function build(json) {
        return v4_1.createComplexType(json, {
            FormColumnAlias: function (formColumnAlias) { return ({ formColumnAlias: v4_1.edmToTs(formColumnAlias, 'Edm.String') }); },
            FormColumnDescription: function (formColumnDescription) { return ({ formColumnDescription: v4_1.edmToTs(formColumnDescription, 'Edm.String') }); },
            FormColumnNumber: function (formColumnNumber) { return ({ formColumnNumber: v4_1.edmToTs(formColumnNumber, 'Edm.Int32') }); },
            SonNumber: function (sonNumber) { return ({ sonNumber: v4_1.edmToTs(sonNumber, 'Edm.Int32') }); },
            Code: function (code) { return ({ code: v4_1.edmToTs(code, 'Edm.String') }); }
        });
    }
    UserObjectMdFormColumn.build = build;
})(UserObjectMdFormColumn = exports.UserObjectMdFormColumn || (exports.UserObjectMdFormColumn = {}));
//# sourceMappingURL=UserObjectMdFormColumn.js.map
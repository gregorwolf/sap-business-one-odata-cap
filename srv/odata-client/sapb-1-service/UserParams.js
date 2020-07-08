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
exports.UserParams = exports.UserParamsField = exports.createUserParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[UserParams.build]] instead.
 */
function createUserParams(json) {
    return UserParams.build(json);
}
exports.createUserParams = createUserParams;
/**
 * UserParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var UserParamsField = /** @class */ (function (_super) {
    __extends(UserParamsField, _super);
    function UserParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[UserParams.internalKey]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.internalKey = new v4_1.ComplexTypeNumberPropertyField('InternalKey', _this, 'Edm.Int32');
        return _this;
    }
    return UserParamsField;
}(v4_1.ComplexTypeField));
exports.UserParamsField = UserParamsField;
var UserParams;
(function (UserParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            InternalKey: function (internalKey) { return ({ internalKey: v4_1.edmToTs(internalKey, 'Edm.Int32') }); }
        });
    }
    UserParams.build = build;
})(UserParams = exports.UserParams || (exports.UserParams = {}));
//# sourceMappingURL=UserParams.js.map
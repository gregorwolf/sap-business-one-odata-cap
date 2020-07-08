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
exports.TeamParams = exports.TeamParamsField = exports.createTeamParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[TeamParams.build]] instead.
 */
function createTeamParams(json) {
    return TeamParams.build(json);
}
exports.createTeamParams = createTeamParams;
/**
 * TeamParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var TeamParamsField = /** @class */ (function (_super) {
    __extends(TeamParamsField, _super);
    function TeamParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[TeamParams.teamId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.teamId = new v4_1.ComplexTypeNumberPropertyField('TeamID', _this, 'Edm.Int32');
        return _this;
    }
    return TeamParamsField;
}(v4_1.ComplexTypeField));
exports.TeamParamsField = TeamParamsField;
var TeamParams;
(function (TeamParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            TeamID: function (teamId) { return ({ teamId: v4_1.edmToTs(teamId, 'Edm.Int32') }); }
        });
    }
    TeamParams.build = build;
})(TeamParams = exports.TeamParams || (exports.TeamParams = {}));
//# sourceMappingURL=TeamParams.js.map
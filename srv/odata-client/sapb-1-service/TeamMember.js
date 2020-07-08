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
exports.TeamMember = exports.TeamMemberField = exports.createTeamMember = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[TeamMember.build]] instead.
 */
function createTeamMember(json) {
    return TeamMember.build(json);
}
exports.createTeamMember = createTeamMember;
/**
 * TeamMemberField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var TeamMemberField = /** @class */ (function (_super) {
    __extends(TeamMemberField, _super);
    function TeamMemberField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[TeamMember.teamId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.teamId = new v4_1.ComplexTypeNumberPropertyField('TeamID', _this, 'Edm.Int32');
        /**
         * Representation of the [[TeamMember.employeeId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.employeeId = new v4_1.ComplexTypeNumberPropertyField('EmployeeID', _this, 'Edm.Int32');
        return _this;
    }
    return TeamMemberField;
}(v4_1.ComplexTypeField));
exports.TeamMemberField = TeamMemberField;
var TeamMember;
(function (TeamMember) {
    function build(json) {
        return v4_1.createComplexType(json, {
            TeamID: function (teamId) { return ({ teamId: v4_1.edmToTs(teamId, 'Edm.Int32') }); },
            EmployeeID: function (employeeId) { return ({ employeeId: v4_1.edmToTs(employeeId, 'Edm.Int32') }); }
        });
    }
    TeamMember.build = build;
})(TeamMember = exports.TeamMember || (exports.TeamMember = {}));
//# sourceMappingURL=TeamMember.js.map
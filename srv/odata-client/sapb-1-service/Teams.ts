/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TeamsRequestBuilder } from './TeamsRequestBuilder';
import { TeamMember, TeamMemberField } from './TeamMember';
import { AllFields, CollectionField, CustomField, Entity, EntityBuilderType, Field, NumberField, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "Teams" of service "SAPB1".
 */
export class Teams extends Entity implements TeamsType {
  /**
   * Technical entity name for Teams.
   */
  static _entityName = 'Teams';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Teams.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Team Id.
   * @nullable
   */
  teamId?: number;
  /**
   * Team Name.
   * @nullable
   */
  teamName?: string;
  /**
   * Description.
   * @nullable
   */
  description?: string;
  /**
   * Team Members.
   * @nullable
   */
  teamMembers?: TeamMember[];

  /**
   * Returns an entity builder to construct instances `Teams`.
   * @returns A builder that constructs instances of entity type `Teams`.
   */
  static builder(): EntityBuilderType<Teams, TeamsTypeForceMandatory> {
    return Entity.entityBuilder(Teams);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Teams` entity type.
   * @returns A `Teams` request builder.
   */
  static requestBuilder(): TeamsRequestBuilder {
    return new TeamsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Teams`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Teams`.
   */
  static customField(fieldName: string): CustomField<Teams> {
    return Entity.customFieldSelector(fieldName, Teams);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface TeamsType {
  teamId?: number;
  teamName?: string;
  description?: string;
  teamMembers?: TeamMember[];
}

export interface TeamsTypeForceMandatory {
  teamId: number;
  teamName: string;
  description: string;
  teamMembers: TeamMember[];
}

export namespace Teams {
  /**
   * Static representation of the [[teamId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TEAM_ID: NumberField<Teams> = new NumberField('TeamID', Teams, 'Edm.Int32');
  /**
   * Static representation of the [[teamName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TEAM_NAME: StringField<Teams> = new StringField('TeamName', Teams, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<Teams> = new StringField('Description', Teams, 'Edm.String');
  /**
   * Static representation of the [[teamMembers]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TEAM_MEMBERS: CollectionField<Teams> = new CollectionField('TeamMembers', Teams, new TeamMemberField('', Teams));
  /**
   * All fields of the Teams entity.
   */
  export const _allFields: Array<NumberField<Teams> | StringField<Teams> | CollectionField<Teams>> = [
    Teams.TEAM_ID,
    Teams.TEAM_NAME,
    Teams.DESCRIPTION,
    Teams.TEAM_MEMBERS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Teams> = new AllFields('*', Teams);
  /**
   * All key fields of the Teams entity.
   */
  export const _keyFields: Array<Field<Teams>> = [Teams.TEAM_ID];
  /**
   * Mapping of all key field names to the respective static field property Teams.
   */
  export const _keys: { [keys: string]: Field<Teams> } = Teams._keyFields.reduce((acc: { [keys: string]: Field<Teams> }, field: Field<Teams>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}

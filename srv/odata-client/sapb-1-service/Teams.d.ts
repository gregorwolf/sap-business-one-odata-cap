import { TeamsRequestBuilder } from './TeamsRequestBuilder';
import { TeamMember } from './TeamMember';
import { AllFields, CollectionField, CustomFieldV4, EntityBuilderType, EntityV4, Field, NumberField, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "Teams" of service "SAPB1".
 */
export declare class Teams extends EntityV4 implements TeamsType {
    /**
     * Technical entity name for Teams.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
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
     * Returns an entity builder to construct instances of `Teams`.
     * @returns A builder that constructs instances of entity type `Teams`.
     */
    static builder(): EntityBuilderType<Teams, TeamsType>;
    /**
     * Returns a request builder to construct requests for operations on the `Teams` entity type.
     * @returns A `Teams` request builder.
     */
    static requestBuilder(): TeamsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Teams`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Teams`.
     */
    static customField(fieldName: string): CustomFieldV4<Teams>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface TeamsType {
    teamId?: number | null;
    teamName?: string | null;
    description?: string | null;
    teamMembers?: TeamMember[] | null;
}
export declare namespace Teams {
    /**
     * Static representation of the [[teamId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TEAM_ID: NumberField<Teams>;
    /**
     * Static representation of the [[teamName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TEAM_NAME: StringField<Teams>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<Teams>;
    /**
     * Static representation of the [[teamMembers]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TEAM_MEMBERS: CollectionField<Teams, TeamMember>;
    /**
     * All fields of the Teams entity.
     */
    const _allFields: Array<NumberField<Teams> | StringField<Teams> | CollectionField<Teams, TeamMember>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Teams>;
    /**
     * All key fields of the Teams entity.
     */
    const _keyFields: Array<Field<Teams>>;
    /**
     * Mapping of all key field names to the respective static field property Teams.
     */
    const _keys: {
        [keys: string]: Field<Teams>;
    };
}
//# sourceMappingURL=Teams.d.ts.map
import { RelationshipsRequestBuilder } from './RelationshipsRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "Relationships" of service "SAPB1".
 */
export declare class Relationships extends Entity implements RelationshipsType {
    /**
     * Technical entity name for Relationships.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Relationships.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Relationship Description.
     * @nullable
     */
    relationshipDescription?: string;
    /**
     * Relationship Code.
     * @nullable
     */
    relationshipCode?: number;
    /**
     * One-to-many navigation property to the [[PartnersSetups]] entity.
     */
    partnersSetups: PartnersSetups[];
    /**
     * Returns an entity builder to construct instances `Relationships`.
     * @returns A builder that constructs instances of entity type `Relationships`.
     */
    static builder(): EntityBuilderType<Relationships, RelationshipsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `Relationships` entity type.
     * @returns A `Relationships` request builder.
     */
    static requestBuilder(): RelationshipsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Relationships`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Relationships`.
     */
    static customField(fieldName: string): CustomField<Relationships>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { PartnersSetups, PartnersSetupsType } from './PartnersSetups';
export interface RelationshipsType {
    relationshipDescription?: string;
    relationshipCode?: number;
    partnersSetups: PartnersSetupsType[];
}
export interface RelationshipsTypeForceMandatory {
    relationshipDescription: string;
    relationshipCode: number;
    partnersSetups: PartnersSetupsType[];
}
export declare namespace Relationships {
    /**
     * Static representation of the [[relationshipDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RELATIONSHIP_DESCRIPTION: StringField<Relationships>;
    /**
     * Static representation of the [[relationshipCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RELATIONSHIP_CODE: NumberField<Relationships>;
    /**
     * Static representation of the one-to-many navigation property [[partnersSetups]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARTNERS_SETUPS: OneToManyLink<Relationships, PartnersSetups>;
    /**
     * All fields of the Relationships entity.
     */
    const _allFields: Array<StringField<Relationships> | NumberField<Relationships> | OneToManyLink<Relationships, PartnersSetups>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Relationships>;
    /**
     * All key fields of the Relationships entity.
     */
    const _keyFields: Array<Field<Relationships>>;
    /**
     * Mapping of all key field names to the respective static field property Relationships.
     */
    const _keys: {
        [keys: string]: Field<Relationships>;
    };
}
//# sourceMappingURL=Relationships.d.ts.map
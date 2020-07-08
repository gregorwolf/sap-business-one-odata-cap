import { ActivityRecipientListsRequestBuilder } from './ActivityRecipientListsRequestBuilder';
import { ActivityRecipient } from './ActivityRecipient';
import { AllFields, CollectionField, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "ActivityRecipientLists" of service "SAPB1".
 */
export declare class ActivityRecipientLists extends Entity implements ActivityRecipientListsType {
    /**
     * Technical entity name for ActivityRecipientLists.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ActivityRecipientLists.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Code.
     * @nullable
     */
    code?: number;
    /**
     * Name.
     * @nullable
     */
    name?: string;
    /**
     * Activity Recipient Collection.
     * @nullable
     */
    activityRecipientCollection?: ActivityRecipient[];
    /**
     * One-to-many navigation property to the [[Activities]] entity.
     */
    activities: Activities[];
    /**
     * Returns an entity builder to construct instances `ActivityRecipientLists`.
     * @returns A builder that constructs instances of entity type `ActivityRecipientLists`.
     */
    static builder(): EntityBuilderType<ActivityRecipientLists, ActivityRecipientListsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `ActivityRecipientLists` entity type.
     * @returns A `ActivityRecipientLists` request builder.
     */
    static requestBuilder(): ActivityRecipientListsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ActivityRecipientLists`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ActivityRecipientLists`.
     */
    static customField(fieldName: string): CustomField<ActivityRecipientLists>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Activities, ActivitiesType } from './Activities';
export interface ActivityRecipientListsType {
    code?: number;
    name?: string;
    activityRecipientCollection?: ActivityRecipient[];
    activities: ActivitiesType[];
}
export interface ActivityRecipientListsTypeForceMandatory {
    code: number;
    name: string;
    activityRecipientCollection: ActivityRecipient[];
    activities: ActivitiesType[];
}
export declare namespace ActivityRecipientLists {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: NumberField<ActivityRecipientLists>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<ActivityRecipientLists>;
    /**
     * Static representation of the [[activityRecipientCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVITY_RECIPIENT_COLLECTION: CollectionField<ActivityRecipientLists>;
    /**
     * Static representation of the one-to-many navigation property [[activities]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVITIES: OneToManyLink<ActivityRecipientLists, Activities>;
    /**
     * All fields of the ActivityRecipientLists entity.
     */
    const _allFields: Array<NumberField<ActivityRecipientLists> | StringField<ActivityRecipientLists> | CollectionField<ActivityRecipientLists> | OneToManyLink<ActivityRecipientLists, Activities>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<ActivityRecipientLists>;
    /**
     * All key fields of the ActivityRecipientLists entity.
     */
    const _keyFields: Array<Field<ActivityRecipientLists>>;
    /**
     * Mapping of all key field names to the respective static field property ActivityRecipientLists.
     */
    const _keys: {
        [keys: string]: Field<ActivityRecipientLists>;
    };
}
//# sourceMappingURL=ActivityRecipientLists.d.ts.map
import { QueueRequestBuilder } from './QueueRequestBuilder';
import { QueueMember } from './QueueMember';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AllFields, CollectionField, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "Queue" of service "SAPB1".
 */
export declare class Queue extends EntityV4 implements QueueType {
    /**
     * Technical entity name for Queue.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Queue Id.
     * @nullable
     */
    queueId?: string;
    /**
     * Description.
     * @nullable
     */
    description?: string;
    /**
     * Inactive.
     * @nullable
     */
    inactive?: BoYesNoEnum;
    /**
     * Queue Manager.
     * @nullable
     */
    queueManager?: number;
    /**
     * Queue Email.
     * @nullable
     */
    queueEmail?: string;
    /**
     * Queue Members.
     * @nullable
     */
    queueMembers?: QueueMember[];
    /**
     * One-to-one navigation property to the [[Users]] entity.
     */
    user: Users;
    /**
     * One-to-many navigation property to the [[ServiceCalls]] entity.
     */
    serviceCalls: ServiceCalls[];
    /**
     * Returns an entity builder to construct instances of `Queue`.
     * @returns A builder that constructs instances of entity type `Queue`.
     */
    static builder(): EntityBuilderType<Queue, QueueType>;
    /**
     * Returns a request builder to construct requests for operations on the `Queue` entity type.
     * @returns A `Queue` request builder.
     */
    static requestBuilder(): QueueRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Queue`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Queue`.
     */
    static customField(fieldName: string): CustomFieldV4<Queue>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Users, UsersType } from './Users';
import { ServiceCalls, ServiceCallsType } from './ServiceCalls';
export interface QueueType {
    queueId?: string | null;
    description?: string | null;
    inactive?: BoYesNoEnum | null;
    queueManager?: number | null;
    queueEmail?: string | null;
    queueMembers?: QueueMember[] | null;
    user: UsersType;
    serviceCalls: ServiceCallsType[];
}
export declare namespace Queue {
    /**
     * Static representation of the [[queueId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUEUE_ID: StringField<Queue>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<Queue>;
    /**
     * Static representation of the [[inactive]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INACTIVE: EnumField<Queue>;
    /**
     * Static representation of the [[queueManager]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUEUE_MANAGER: NumberField<Queue>;
    /**
     * Static representation of the [[queueEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUEUE_EMAIL: StringField<Queue>;
    /**
     * Static representation of the [[queueMembers]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUEUE_MEMBERS: CollectionField<Queue, QueueMember>;
    /**
     * Static representation of the one-to-one navigation property [[user]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER: OneToOneLink<Queue, Users>;
    /**
     * Static representation of the one-to-many navigation property [[serviceCalls]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERVICE_CALLS: OneToManyLink<Queue, ServiceCalls>;
    /**
     * All fields of the Queue entity.
     */
    const _allFields: Array<StringField<Queue> | EnumField<Queue> | NumberField<Queue> | CollectionField<Queue, QueueMember> | OneToOneLink<Queue, Users> | OneToManyLink<Queue, ServiceCalls>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Queue>;
    /**
     * All key fields of the Queue entity.
     */
    const _keyFields: Array<Field<Queue>>;
    /**
     * Mapping of all key field names to the respective static field property Queue.
     */
    const _keys: {
        [keys: string]: Field<Queue>;
    };
}
//# sourceMappingURL=Queue.d.ts.map
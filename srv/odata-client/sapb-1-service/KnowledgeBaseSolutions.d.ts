import { KnowledgeBaseSolutionsRequestBuilder } from './KnowledgeBaseSolutionsRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomFieldV4, DateField, EntityBuilderType, EntityV4, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "KnowledgeBaseSolutions" of service "SAPB1".
 */
export declare class KnowledgeBaseSolutions extends EntityV4 implements KnowledgeBaseSolutionsType {
    /**
     * Technical entity name for KnowledgeBaseSolutions.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Item Code.
     * @nullable
     */
    itemCode?: string;
    /**
     * Status.
     * @nullable
     */
    status?: number;
    /**
     * Owner.
     * @nullable
     */
    owner?: number;
    /**
     * Created By.
     * @nullable
     */
    createdBy?: number;
    /**
     * Creation Date.
     * @nullable
     */
    creationDate?: Moment;
    /**
     * Last Updated By.
     * @nullable
     */
    lastUpdatedBy?: number;
    /**
     * Last Update Date.
     * @nullable
     */
    lastUpdateDate?: Moment;
    /**
     * Solution.
     * @nullable
     */
    solution?: string;
    /**
     * Symptom.
     * @nullable
     */
    symptom?: string;
    /**
     * Cause.
     * @nullable
     */
    cause?: string;
    /**
     * Description.
     * @nullable
     */
    description?: string;
    /**
     * Solution Code.
     * @nullable
     */
    solutionCode?: number;
    /**
     * Attachment Entry.
     * @nullable
     */
    attachmentEntry?: number;
    /**
     * One-to-one navigation property to the [[Items]] entity.
     */
    item: Items;
    /**
     * One-to-one navigation property to the [[ServiceCallSolutionStatus]] entity.
     */
    serviceCallSolutionStatus: ServiceCallSolutionStatus;
    /**
     * One-to-one navigation property to the [[Users]] entity.
     */
    user: Users;
    /**
     * Returns an entity builder to construct instances of `KnowledgeBaseSolutions`.
     * @returns A builder that constructs instances of entity type `KnowledgeBaseSolutions`.
     */
    static builder(): EntityBuilderType<KnowledgeBaseSolutions, KnowledgeBaseSolutionsType>;
    /**
     * Returns a request builder to construct requests for operations on the `KnowledgeBaseSolutions` entity type.
     * @returns A `KnowledgeBaseSolutions` request builder.
     */
    static requestBuilder(): KnowledgeBaseSolutionsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `KnowledgeBaseSolutions`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `KnowledgeBaseSolutions`.
     */
    static customField(fieldName: string): CustomFieldV4<KnowledgeBaseSolutions>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Items, ItemsType } from './Items';
import { ServiceCallSolutionStatus, ServiceCallSolutionStatusType } from './ServiceCallSolutionStatus';
import { Users, UsersType } from './Users';
export interface KnowledgeBaseSolutionsType {
    itemCode?: string | null;
    status?: number | null;
    owner?: number | null;
    createdBy?: number | null;
    creationDate?: Moment | null;
    lastUpdatedBy?: number | null;
    lastUpdateDate?: Moment | null;
    solution?: string | null;
    symptom?: string | null;
    cause?: string | null;
    description?: string | null;
    solutionCode?: number | null;
    attachmentEntry?: number | null;
    item: ItemsType;
    serviceCallSolutionStatus: ServiceCallSolutionStatusType;
    user: UsersType;
}
export declare namespace KnowledgeBaseSolutions {
    /**
     * Static representation of the [[itemCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_CODE: StringField<KnowledgeBaseSolutions>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: NumberField<KnowledgeBaseSolutions>;
    /**
     * Static representation of the [[owner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OWNER: NumberField<KnowledgeBaseSolutions>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: NumberField<KnowledgeBaseSolutions>;
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATION_DATE: DateField<KnowledgeBaseSolutions>;
    /**
     * Static representation of the [[lastUpdatedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_UPDATED_BY: NumberField<KnowledgeBaseSolutions>;
    /**
     * Static representation of the [[lastUpdateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_UPDATE_DATE: DateField<KnowledgeBaseSolutions>;
    /**
     * Static representation of the [[solution]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOLUTION: StringField<KnowledgeBaseSolutions>;
    /**
     * Static representation of the [[symptom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SYMPTOM: StringField<KnowledgeBaseSolutions>;
    /**
     * Static representation of the [[cause]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CAUSE: StringField<KnowledgeBaseSolutions>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<KnowledgeBaseSolutions>;
    /**
     * Static representation of the [[solutionCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOLUTION_CODE: NumberField<KnowledgeBaseSolutions>;
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ATTACHMENT_ENTRY: NumberField<KnowledgeBaseSolutions>;
    /**
     * Static representation of the one-to-one navigation property [[item]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM: OneToOneLink<KnowledgeBaseSolutions, Items>;
    /**
     * Static representation of the one-to-one navigation property [[serviceCallSolutionStatus]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERVICE_CALL_SOLUTION_STATUS: OneToOneLink<KnowledgeBaseSolutions, ServiceCallSolutionStatus>;
    /**
     * Static representation of the one-to-one navigation property [[user]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER: OneToOneLink<KnowledgeBaseSolutions, Users>;
    /**
     * All fields of the KnowledgeBaseSolutions entity.
     */
    const _allFields: Array<StringField<KnowledgeBaseSolutions> | NumberField<KnowledgeBaseSolutions> | DateField<KnowledgeBaseSolutions> | OneToOneLink<KnowledgeBaseSolutions, Items> | OneToOneLink<KnowledgeBaseSolutions, ServiceCallSolutionStatus> | OneToOneLink<KnowledgeBaseSolutions, Users>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<KnowledgeBaseSolutions>;
    /**
     * All key fields of the KnowledgeBaseSolutions entity.
     */
    const _keyFields: Array<Field<KnowledgeBaseSolutions>>;
    /**
     * Mapping of all key field names to the respective static field property KnowledgeBaseSolutions.
     */
    const _keys: {
        [keys: string]: Field<KnowledgeBaseSolutions>;
    };
}
//# sourceMappingURL=KnowledgeBaseSolutions.d.ts.map
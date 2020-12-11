import { ApprovalTemplatesRequestBuilder } from './ApprovalTemplatesRequestBuilder';
import { ApprovalTemplateUser } from './ApprovalTemplateUser';
import { ApprovalTemplateStage } from './ApprovalTemplateStage';
import { ApprovalTemplateDocument } from './ApprovalTemplateDocument';
import { ApprovalTemplateTerm } from './ApprovalTemplateTerm';
import { ApprovalTemplateQuery } from './ApprovalTemplateQuery';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AllFields, CollectionField, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "ApprovalTemplates" of service "SAPB1".
 */
export declare class ApprovalTemplates extends EntityV4 implements ApprovalTemplatesType {
    /**
     * Technical entity name for ApprovalTemplates.
     */
    static _entityName: string;
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
     * Remarks.
     * @nullable
     */
    remarks?: string;
    /**
     * Use Terms.
     * @nullable
     */
    useTerms?: BoYesNoEnum;
    /**
     * Is Active.
     * @nullable
     */
    isActive?: BoYesNoEnum;
    /**
     * Is Active When Updating Documents.
     * @nullable
     */
    isActiveWhenUpdatingDocuments?: BoYesNoEnum;
    /**
     * Approval Template Users.
     * @nullable
     */
    approvalTemplateUsers?: ApprovalTemplateUser[];
    /**
     * Approval Template Stages.
     * @nullable
     */
    approvalTemplateStages?: ApprovalTemplateStage[];
    /**
     * Approval Template Documents.
     * @nullable
     */
    approvalTemplateDocuments?: ApprovalTemplateDocument[];
    /**
     * Approval Template Terms.
     * @nullable
     */
    approvalTemplateTerms?: ApprovalTemplateTerm[];
    /**
     * Approval Template Queries.
     * @nullable
     */
    approvalTemplateQueries?: ApprovalTemplateQuery[];
    /**
     * One-to-many navigation property to the [[ApprovalRequests]] entity.
     */
    approvalRequests: ApprovalRequests[];
    /**
     * Returns an entity builder to construct instances of `ApprovalTemplates`.
     * @returns A builder that constructs instances of entity type `ApprovalTemplates`.
     */
    static builder(): EntityBuilderType<ApprovalTemplates, ApprovalTemplatesType>;
    /**
     * Returns a request builder to construct requests for operations on the `ApprovalTemplates` entity type.
     * @returns A `ApprovalTemplates` request builder.
     */
    static requestBuilder(): ApprovalTemplatesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ApprovalTemplates`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ApprovalTemplates`.
     */
    static customField(fieldName: string): CustomFieldV4<ApprovalTemplates>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { ApprovalRequests, ApprovalRequestsType } from './ApprovalRequests';
export interface ApprovalTemplatesType {
    code?: number | null;
    name?: string | null;
    remarks?: string | null;
    useTerms?: BoYesNoEnum | null;
    isActive?: BoYesNoEnum | null;
    isActiveWhenUpdatingDocuments?: BoYesNoEnum | null;
    approvalTemplateUsers?: ApprovalTemplateUser[] | null;
    approvalTemplateStages?: ApprovalTemplateStage[] | null;
    approvalTemplateDocuments?: ApprovalTemplateDocument[] | null;
    approvalTemplateTerms?: ApprovalTemplateTerm[] | null;
    approvalTemplateQueries?: ApprovalTemplateQuery[] | null;
    approvalRequests: ApprovalRequestsType[];
}
export declare namespace ApprovalTemplates {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: NumberField<ApprovalTemplates>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<ApprovalTemplates>;
    /**
     * Static representation of the [[remarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REMARKS: StringField<ApprovalTemplates>;
    /**
     * Static representation of the [[useTerms]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USE_TERMS: EnumField<ApprovalTemplates>;
    /**
     * Static representation of the [[isActive]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_ACTIVE: EnumField<ApprovalTemplates>;
    /**
     * Static representation of the [[isActiveWhenUpdatingDocuments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_ACTIVE_WHEN_UPDATING_DOCUMENTS: EnumField<ApprovalTemplates>;
    /**
     * Static representation of the [[approvalTemplateUsers]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPROVAL_TEMPLATE_USERS: CollectionField<ApprovalTemplates, ApprovalTemplateUser>;
    /**
     * Static representation of the [[approvalTemplateStages]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPROVAL_TEMPLATE_STAGES: CollectionField<ApprovalTemplates, ApprovalTemplateStage>;
    /**
     * Static representation of the [[approvalTemplateDocuments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPROVAL_TEMPLATE_DOCUMENTS: CollectionField<ApprovalTemplates, ApprovalTemplateDocument>;
    /**
     * Static representation of the [[approvalTemplateTerms]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPROVAL_TEMPLATE_TERMS: CollectionField<ApprovalTemplates, ApprovalTemplateTerm>;
    /**
     * Static representation of the [[approvalTemplateQueries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPROVAL_TEMPLATE_QUERIES: CollectionField<ApprovalTemplates, ApprovalTemplateQuery>;
    /**
     * Static representation of the one-to-many navigation property [[approvalRequests]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPROVAL_REQUESTS: OneToManyLink<ApprovalTemplates, ApprovalRequests>;
    /**
     * All fields of the ApprovalTemplates entity.
     */
    const _allFields: Array<NumberField<ApprovalTemplates> | StringField<ApprovalTemplates> | EnumField<ApprovalTemplates> | CollectionField<ApprovalTemplates, ApprovalTemplateUser> | CollectionField<ApprovalTemplates, ApprovalTemplateStage> | CollectionField<ApprovalTemplates, ApprovalTemplateDocument> | CollectionField<ApprovalTemplates, ApprovalTemplateTerm> | CollectionField<ApprovalTemplates, ApprovalTemplateQuery> | OneToManyLink<ApprovalTemplates, ApprovalRequests>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<ApprovalTemplates>;
    /**
     * All key fields of the ApprovalTemplates entity.
     */
    const _keyFields: Array<Field<ApprovalTemplates>>;
    /**
     * Mapping of all key field names to the respective static field property ApprovalTemplates.
     */
    const _keys: {
        [keys: string]: Field<ApprovalTemplates>;
    };
}
//# sourceMappingURL=ApprovalTemplates.d.ts.map
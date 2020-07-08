import { ApprovalTemplatesRequestBuilder } from './ApprovalTemplatesRequestBuilder';
import { ApprovalTemplateUser } from './ApprovalTemplateUser';
import { ApprovalTemplateStage } from './ApprovalTemplateStage';
import { ApprovalTemplateDocument } from './ApprovalTemplateDocument';
import { ApprovalTemplateTerm } from './ApprovalTemplateTerm';
import { ApprovalTemplateQuery } from './ApprovalTemplateQuery';
import { AllFields, CollectionField, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "ApprovalTemplates" of service "SAPB1".
 */
export declare class ApprovalTemplates extends Entity implements ApprovalTemplatesType {
    /**
     * Technical entity name for ApprovalTemplates.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ApprovalTemplates.
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
     * Remarks.
     * @nullable
     */
    remarks?: string;
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
     * Returns an entity builder to construct instances `ApprovalTemplates`.
     * @returns A builder that constructs instances of entity type `ApprovalTemplates`.
     */
    static builder(): EntityBuilderType<ApprovalTemplates, ApprovalTemplatesTypeForceMandatory>;
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
    static customField(fieldName: string): CustomField<ApprovalTemplates>;
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
    code?: number;
    name?: string;
    remarks?: string;
    approvalTemplateUsers?: ApprovalTemplateUser[];
    approvalTemplateStages?: ApprovalTemplateStage[];
    approvalTemplateDocuments?: ApprovalTemplateDocument[];
    approvalTemplateTerms?: ApprovalTemplateTerm[];
    approvalTemplateQueries?: ApprovalTemplateQuery[];
    approvalRequests: ApprovalRequestsType[];
}
export interface ApprovalTemplatesTypeForceMandatory {
    code: number;
    name: string;
    remarks: string;
    approvalTemplateUsers: ApprovalTemplateUser[];
    approvalTemplateStages: ApprovalTemplateStage[];
    approvalTemplateDocuments: ApprovalTemplateDocument[];
    approvalTemplateTerms: ApprovalTemplateTerm[];
    approvalTemplateQueries: ApprovalTemplateQuery[];
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
     * Static representation of the [[approvalTemplateUsers]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPROVAL_TEMPLATE_USERS: CollectionField<ApprovalTemplates>;
    /**
     * Static representation of the [[approvalTemplateStages]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPROVAL_TEMPLATE_STAGES: CollectionField<ApprovalTemplates>;
    /**
     * Static representation of the [[approvalTemplateDocuments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPROVAL_TEMPLATE_DOCUMENTS: CollectionField<ApprovalTemplates>;
    /**
     * Static representation of the [[approvalTemplateTerms]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPROVAL_TEMPLATE_TERMS: CollectionField<ApprovalTemplates>;
    /**
     * Static representation of the [[approvalTemplateQueries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPROVAL_TEMPLATE_QUERIES: CollectionField<ApprovalTemplates>;
    /**
     * Static representation of the one-to-many navigation property [[approvalRequests]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPROVAL_REQUESTS: OneToManyLink<ApprovalTemplates, ApprovalRequests>;
    /**
     * All fields of the ApprovalTemplates entity.
     */
    const _allFields: Array<NumberField<ApprovalTemplates> | StringField<ApprovalTemplates> | CollectionField<ApprovalTemplates> | OneToManyLink<ApprovalTemplates, ApprovalRequests>>;
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
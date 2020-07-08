import { ApprovalStagesRequestBuilder } from './ApprovalStagesRequestBuilder';
import { ApprovalStageApprover } from './ApprovalStageApprover';
import { AllFields, CollectionField, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "ApprovalStages" of service "SAPB1".
 */
export declare class ApprovalStages extends Entity implements ApprovalStagesType {
    /**
     * Technical entity name for ApprovalStages.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ApprovalStages.
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
     * No Of Approvers Required.
     * @nullable
     */
    noOfApproversRequired?: number;
    /**
     * Remarks.
     * @nullable
     */
    remarks?: string;
    /**
     * Approval Stage Approvers.
     * @nullable
     */
    approvalStageApprovers?: ApprovalStageApprover[];
    /**
     * One-to-many navigation property to the [[ApprovalRequests]] entity.
     */
    approvalRequests: ApprovalRequests[];
    /**
     * Returns an entity builder to construct instances `ApprovalStages`.
     * @returns A builder that constructs instances of entity type `ApprovalStages`.
     */
    static builder(): EntityBuilderType<ApprovalStages, ApprovalStagesTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `ApprovalStages` entity type.
     * @returns A `ApprovalStages` request builder.
     */
    static requestBuilder(): ApprovalStagesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ApprovalStages`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ApprovalStages`.
     */
    static customField(fieldName: string): CustomField<ApprovalStages>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { ApprovalRequests, ApprovalRequestsType } from './ApprovalRequests';
export interface ApprovalStagesType {
    code?: number;
    name?: string;
    noOfApproversRequired?: number;
    remarks?: string;
    approvalStageApprovers?: ApprovalStageApprover[];
    approvalRequests: ApprovalRequestsType[];
}
export interface ApprovalStagesTypeForceMandatory {
    code: number;
    name: string;
    noOfApproversRequired: number;
    remarks: string;
    approvalStageApprovers: ApprovalStageApprover[];
    approvalRequests: ApprovalRequestsType[];
}
export declare namespace ApprovalStages {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: NumberField<ApprovalStages>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<ApprovalStages>;
    /**
     * Static representation of the [[noOfApproversRequired]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NO_OF_APPROVERS_REQUIRED: NumberField<ApprovalStages>;
    /**
     * Static representation of the [[remarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REMARKS: StringField<ApprovalStages>;
    /**
     * Static representation of the [[approvalStageApprovers]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPROVAL_STAGE_APPROVERS: CollectionField<ApprovalStages>;
    /**
     * Static representation of the one-to-many navigation property [[approvalRequests]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPROVAL_REQUESTS: OneToManyLink<ApprovalStages, ApprovalRequests>;
    /**
     * All fields of the ApprovalStages entity.
     */
    const _allFields: Array<NumberField<ApprovalStages> | StringField<ApprovalStages> | CollectionField<ApprovalStages> | OneToManyLink<ApprovalStages, ApprovalRequests>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<ApprovalStages>;
    /**
     * All key fields of the ApprovalStages entity.
     */
    const _keyFields: Array<Field<ApprovalStages>>;
    /**
     * Mapping of all key field names to the respective static field property ApprovalStages.
     */
    const _keys: {
        [keys: string]: Field<ApprovalStages>;
    };
}
//# sourceMappingURL=ApprovalStages.d.ts.map
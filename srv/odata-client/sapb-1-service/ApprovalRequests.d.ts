import { ApprovalRequestsRequestBuilder } from './ApprovalRequestsRequestBuilder';
import { Moment } from 'moment';
import { ApprovalRequestLine } from './ApprovalRequestLine';
import { ApprovalRequestDecision } from './ApprovalRequestDecision';
import { AllFields, CollectionField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, StringField, Time, TimeField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "ApprovalRequests" of service "SAPB1".
 */
export declare class ApprovalRequests extends Entity implements ApprovalRequestsType {
    /**
     * Technical entity name for ApprovalRequests.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ApprovalRequests.
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
     * Approval Templates Id.
     * @nullable
     */
    approvalTemplatesId?: number;
    /**
     * Object Type.
     * @nullable
     */
    objectType?: string;
    /**
     * Is Draft.
     * @nullable
     */
    isDraft?: string;
    /**
     * Object Entry.
     * @nullable
     */
    objectEntry?: number;
    /**
     * Remarks.
     * @nullable
     */
    remarks?: string;
    /**
     * Current Stage.
     * @nullable
     */
    currentStage?: number;
    /**
     * Originator Id.
     * @nullable
     */
    originatorId?: number;
    /**
     * Creation Date.
     * @nullable
     */
    creationDate?: Moment;
    /**
     * Creation Time.
     * @nullable
     */
    creationTime?: Time;
    /**
     * Draft Entry.
     * @nullable
     */
    draftEntry?: number;
    /**
     * Draft Type.
     * @nullable
     */
    draftType?: string;
    /**
     * Approval Request Lines.
     * @nullable
     */
    approvalRequestLines?: ApprovalRequestLine[];
    /**
     * Approval Request Decisions.
     * @nullable
     */
    approvalRequestDecisions?: ApprovalRequestDecision[];
    /**
     * One-to-one navigation property to the [[ApprovalTemplates]] entity.
     */
    approvalTemplate: ApprovalTemplates;
    /**
     * One-to-one navigation property to the [[ApprovalStages]] entity.
     */
    approvalStage: ApprovalStages;
    /**
     * One-to-one navigation property to the [[Users]] entity.
     */
    user: Users;
    /**
     * Returns an entity builder to construct instances `ApprovalRequests`.
     * @returns A builder that constructs instances of entity type `ApprovalRequests`.
     */
    static builder(): EntityBuilderType<ApprovalRequests, ApprovalRequestsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `ApprovalRequests` entity type.
     * @returns A `ApprovalRequests` request builder.
     */
    static requestBuilder(): ApprovalRequestsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ApprovalRequests`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ApprovalRequests`.
     */
    static customField(fieldName: string): CustomField<ApprovalRequests>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { ApprovalTemplates, ApprovalTemplatesType } from './ApprovalTemplates';
import { ApprovalStages, ApprovalStagesType } from './ApprovalStages';
import { Users, UsersType } from './Users';
export interface ApprovalRequestsType {
    code?: number;
    approvalTemplatesId?: number;
    objectType?: string;
    isDraft?: string;
    objectEntry?: number;
    remarks?: string;
    currentStage?: number;
    originatorId?: number;
    creationDate?: Moment;
    creationTime?: Time;
    draftEntry?: number;
    draftType?: string;
    approvalRequestLines?: ApprovalRequestLine[];
    approvalRequestDecisions?: ApprovalRequestDecision[];
    approvalTemplate: ApprovalTemplatesType;
    approvalStage: ApprovalStagesType;
    user: UsersType;
}
export interface ApprovalRequestsTypeForceMandatory {
    code: number;
    approvalTemplatesId: number;
    objectType: string;
    isDraft: string;
    objectEntry: number;
    remarks: string;
    currentStage: number;
    originatorId: number;
    creationDate: Moment;
    creationTime: Time;
    draftEntry: number;
    draftType: string;
    approvalRequestLines: ApprovalRequestLine[];
    approvalRequestDecisions: ApprovalRequestDecision[];
    approvalTemplate: ApprovalTemplatesType;
    approvalStage: ApprovalStagesType;
    user: UsersType;
}
export declare namespace ApprovalRequests {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: NumberField<ApprovalRequests>;
    /**
     * Static representation of the [[approvalTemplatesId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPROVAL_TEMPLATES_ID: NumberField<ApprovalRequests>;
    /**
     * Static representation of the [[objectType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OBJECT_TYPE: StringField<ApprovalRequests>;
    /**
     * Static representation of the [[isDraft]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_DRAFT: StringField<ApprovalRequests>;
    /**
     * Static representation of the [[objectEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OBJECT_ENTRY: NumberField<ApprovalRequests>;
    /**
     * Static representation of the [[remarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REMARKS: StringField<ApprovalRequests>;
    /**
     * Static representation of the [[currentStage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENT_STAGE: NumberField<ApprovalRequests>;
    /**
     * Static representation of the [[originatorId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORIGINATOR_ID: NumberField<ApprovalRequests>;
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATION_DATE: DateField<ApprovalRequests>;
    /**
     * Static representation of the [[creationTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATION_TIME: TimeField<ApprovalRequests>;
    /**
     * Static representation of the [[draftEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DRAFT_ENTRY: NumberField<ApprovalRequests>;
    /**
     * Static representation of the [[draftType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DRAFT_TYPE: StringField<ApprovalRequests>;
    /**
     * Static representation of the [[approvalRequestLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPROVAL_REQUEST_LINES: CollectionField<ApprovalRequests>;
    /**
     * Static representation of the [[approvalRequestDecisions]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPROVAL_REQUEST_DECISIONS: CollectionField<ApprovalRequests>;
    /**
     * Static representation of the one-to-one navigation property [[approvalTemplate]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPROVAL_TEMPLATE: OneToOneLink<ApprovalRequests, ApprovalTemplates>;
    /**
     * Static representation of the one-to-one navigation property [[approvalStage]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPROVAL_STAGE: OneToOneLink<ApprovalRequests, ApprovalStages>;
    /**
     * Static representation of the one-to-one navigation property [[user]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER: OneToOneLink<ApprovalRequests, Users>;
    /**
     * All fields of the ApprovalRequests entity.
     */
    const _allFields: Array<NumberField<ApprovalRequests> | StringField<ApprovalRequests> | DateField<ApprovalRequests> | TimeField<ApprovalRequests> | CollectionField<ApprovalRequests> | OneToOneLink<ApprovalRequests, ApprovalTemplates> | OneToOneLink<ApprovalRequests, ApprovalStages> | OneToOneLink<ApprovalRequests, Users>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<ApprovalRequests>;
    /**
     * All key fields of the ApprovalRequests entity.
     */
    const _keyFields: Array<Field<ApprovalRequests>>;
    /**
     * Mapping of all key field names to the respective static field property ApprovalRequests.
     */
    const _keys: {
        [keys: string]: Field<ApprovalRequests>;
    };
}
//# sourceMappingURL=ApprovalRequests.d.ts.map
import { Moment } from 'moment';
import { PmsStageData } from './PmsStageData';
import { PmsOpenIssueData } from './PmsOpenIssueData';
import { PmsDocumentData } from './PmsDocumentData';
import { PmsActivityData } from './PmsActivityData';
import { PmsWorkOrderData } from './PmsWorkOrderData';
import { PmsSummaryData, PmsSummaryDataField } from './PmsSummaryData';
import { PmsDocAttachement } from './PmsDocAttachement';
import { PmsStageAttachement } from './PmsStageAttachement';
import { SubprojectStatusTypeEnum } from './SubprojectStatusTypeEnum';
import { CollectionField, ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * PmSubprojectDocumentData
 */
export interface PmSubprojectDocumentData {
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
    /**
     * Owner.
     * @nullable
     */
    owner?: number;
    /**
     * Subproject Name.
     * @nullable
     */
    subprojectName?: string;
    /**
     * Start Date.
     * @nullable
     */
    startDate?: Moment;
    /**
     * Finished Percent.
     * @nullable
     */
    finishedPercent?: number;
    /**
     * Parent Id.
     * @nullable
     */
    parentId?: number;
    /**
     * Project Id.
     * @nullable
     */
    projectId?: number;
    /**
     * Order.
     * @nullable
     */
    order?: number;
    /**
     * Subproject Type.
     * @nullable
     */
    subprojectType?: number;
    /**
     * Subproject Contribution.
     * @nullable
     */
    subprojectContribution?: number;
    /**
     * Subproject Status.
     * @nullable
     */
    subprojectStatus?: SubprojectStatusTypeEnum;
    /**
     * Subproject End Date.
     * @nullable
     */
    subprojectEndDate?: Moment;
    /**
     * Actual Cost.
     * @nullable
     */
    actualCost?: number;
    /**
     * Planned Cost.
     * @nullable
     */
    plannedCost?: number;
    /**
     * Subproject Depth.
     * @nullable
     */
    subprojectDepth?: number;
    /**
     * Due Date.
     * @nullable
     */
    dueDate?: Moment;
    /**
     * Pms Stages Collection.
     * @nullable
     */
    pmsStagesCollection?: PmsStageData[];
    /**
     * Pms Open Issues Collection.
     * @nullable
     */
    pmsOpenIssuesCollection?: PmsOpenIssueData[];
    /**
     * Pms Documents Collection.
     * @nullable
     */
    pmsDocumentsCollection?: PmsDocumentData[];
    /**
     * Pms Activities Collection.
     * @nullable
     */
    pmsActivitiesCollection?: PmsActivityData[];
    /**
     * Pms Work Orders Collection.
     * @nullable
     */
    pmsWorkOrdersCollection?: PmsWorkOrderData[];
    /**
     * Pms Summary Data.
     * @nullable
     */
    pmsSummaryData?: PmsSummaryData;
    /**
     * Pms Doc Attachements.
     * @nullable
     */
    pmsDocAttachements?: PmsDocAttachement[];
    /**
     * Pms Stage Attachements.
     * @nullable
     */
    pmsStageAttachements?: PmsStageAttachement[];
}
/**
 * @deprecated Since v1.6.0. Use [[PmSubprojectDocumentData.build]] instead.
 */
export declare function createPmSubprojectDocumentData(json: any): PmSubprojectDocumentData;
/**
 * PmSubprojectDocumentDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PmSubprojectDocumentDataField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PmSubprojectDocumentData> {
    /**
     * Representation of the [[PmSubprojectDocumentData.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmSubprojectDocumentData.owner]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    owner: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmSubprojectDocumentData.subprojectName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    subprojectName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PmSubprojectDocumentData.startDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    startDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[PmSubprojectDocumentData.finishedPercent]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    finishedPercent: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmSubprojectDocumentData.parentId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    parentId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmSubprojectDocumentData.projectId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    projectId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmSubprojectDocumentData.order]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    order: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmSubprojectDocumentData.subprojectType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    subprojectType: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmSubprojectDocumentData.subprojectContribution]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    subprojectContribution: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmSubprojectDocumentData.subprojectStatus]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    subprojectStatus: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[PmSubprojectDocumentData.subprojectEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    subprojectEndDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[PmSubprojectDocumentData.actualCost]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    actualCost: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmSubprojectDocumentData.plannedCost]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    plannedCost: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmSubprojectDocumentData.subprojectDepth]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    subprojectDepth: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmSubprojectDocumentData.dueDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dueDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[PmSubprojectDocumentData.pmsStagesCollection]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    pmsStagesCollection: CollectionField<EntityT, PmsStageData>;
    /**
     * Representation of the [[PmSubprojectDocumentData.pmsOpenIssuesCollection]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    pmsOpenIssuesCollection: CollectionField<EntityT, PmsOpenIssueData>;
    /**
     * Representation of the [[PmSubprojectDocumentData.pmsDocumentsCollection]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    pmsDocumentsCollection: CollectionField<EntityT, PmsDocumentData>;
    /**
     * Representation of the [[PmSubprojectDocumentData.pmsActivitiesCollection]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    pmsActivitiesCollection: CollectionField<EntityT, PmsActivityData>;
    /**
     * Representation of the [[PmSubprojectDocumentData.pmsWorkOrdersCollection]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    pmsWorkOrdersCollection: CollectionField<EntityT, PmsWorkOrderData>;
    /**
     * Representation of the [[PmSubprojectDocumentData.pmsSummaryData]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    pmsSummaryData: PmsSummaryDataField<EntityT>;
    /**
     * Representation of the [[PmSubprojectDocumentData.pmsDocAttachements]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    pmsDocAttachements: CollectionField<EntityT, PmsDocAttachement>;
    /**
     * Representation of the [[PmSubprojectDocumentData.pmsStageAttachements]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    pmsStageAttachements: CollectionField<EntityT, PmsStageAttachement>;
    /**
     * Creates an instance of PmSubprojectDocumentDataField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace PmSubprojectDocumentData {
    /**
     * Metadata information on all properties of the `PmSubprojectDocumentData` complex type.
     */
    const _propertyMetadata: PropertyMetadata<PmSubprojectDocumentData>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType | PmsActivityData | PmsDocAttachement | PmsDocumentData | PmsOpenIssueData | PmsStageAttachement | PmsStageData | PmsSummaryData | PmsWorkOrderData;
    }): PmSubprojectDocumentData;
}
//# sourceMappingURL=PmSubprojectDocumentData.d.ts.map
import { Moment } from 'moment';
import { PmsStageData, PmsStageDataField } from './PmsStageData';
import { PmsOpenIssueData, PmsOpenIssueDataField } from './PmsOpenIssueData';
import { PmsDocumentData, PmsDocumentDataField } from './PmsDocumentData';
import { PmsActivityData, PmsActivityDataField } from './PmsActivityData';
import { PmsWorkOrderData, PmsWorkOrderDataField } from './PmsWorkOrderData';
import { PmsSummaryData, PmsSummaryDataField } from './PmsSummaryData';
import { PmsDocAttachement, PmsDocAttachementField } from './PmsDocAttachement';
import { PmsStageAttachement, PmsStageAttachementField } from './PmsStageAttachement';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
    pmsStagesCollection?: PmsStageData;
    /**
     * Pms Open Issues Collection.
     * @nullable
     */
    pmsOpenIssuesCollection?: PmsOpenIssueData;
    /**
     * Pms Documents Collection.
     * @nullable
     */
    pmsDocumentsCollection?: PmsDocumentData;
    /**
     * Pms Activities Collection.
     * @nullable
     */
    pmsActivitiesCollection?: PmsActivityData;
    /**
     * Pms Work Orders Collection.
     * @nullable
     */
    pmsWorkOrdersCollection?: PmsWorkOrderData;
    /**
     * Pms Summary Data.
     * @nullable
     */
    pmsSummaryData?: PmsSummaryData;
    /**
     * Pms Doc Attachements.
     * @nullable
     */
    pmsDocAttachements?: PmsDocAttachement;
    /**
     * Pms Stage Attachements.
     * @nullable
     */
    pmsStageAttachements?: PmsStageAttachement;
}
/**
 * @deprecated Since v1.6.0. Use [[PmSubprojectDocumentData.build]] instead.
 */
export declare function createPmSubprojectDocumentData(json: any): PmSubprojectDocumentData;
/**
 * PmSubprojectDocumentDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PmSubprojectDocumentDataField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
    pmsStagesCollection: PmsStageDataField<EntityT>;
    /**
     * Representation of the [[PmSubprojectDocumentData.pmsOpenIssuesCollection]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    pmsOpenIssuesCollection: PmsOpenIssueDataField<EntityT>;
    /**
     * Representation of the [[PmSubprojectDocumentData.pmsDocumentsCollection]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    pmsDocumentsCollection: PmsDocumentDataField<EntityT>;
    /**
     * Representation of the [[PmSubprojectDocumentData.pmsActivitiesCollection]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    pmsActivitiesCollection: PmsActivityDataField<EntityT>;
    /**
     * Representation of the [[PmSubprojectDocumentData.pmsWorkOrdersCollection]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    pmsWorkOrdersCollection: PmsWorkOrderDataField<EntityT>;
    /**
     * Representation of the [[PmSubprojectDocumentData.pmsSummaryData]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    pmsSummaryData: PmsSummaryDataField<EntityT>;
    /**
     * Representation of the [[PmSubprojectDocumentData.pmsDocAttachements]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    pmsDocAttachements: PmsDocAttachementField<EntityT>;
    /**
     * Representation of the [[PmSubprojectDocumentData.pmsStageAttachements]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    pmsStageAttachements: PmsStageAttachementField<EntityT>;
}
export declare namespace PmSubprojectDocumentData {
    function build(json: {
        [keys: string]: FieldType | PmsActivityData | PmsDocAttachement | PmsDocumentData | PmsOpenIssueData | PmsStageAttachement | PmsStageData | PmsSummaryData | PmsWorkOrderData;
    }): PmSubprojectDocumentData;
}
//# sourceMappingURL=PmSubprojectDocumentData.d.ts.map
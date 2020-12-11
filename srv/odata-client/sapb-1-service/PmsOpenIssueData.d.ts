import { Moment } from 'moment';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * PmsOpenIssueData
 */
export interface PmsOpenIssueData {
    /**
     * Line Id.
     * @nullable
     */
    lineId?: number;
    /**
     * Stage Id.
     * @nullable
     */
    stageId?: number;
    /**
     * Area.
     * @nullable
     */
    area?: number;
    /**
     * Priority.
     * @nullable
     */
    priority?: number;
    /**
     * Remarks.
     * @nullable
     */
    remarks?: string;
    /**
     * Closed.
     * @nullable
     */
    closed?: BoYesNoEnum;
    /**
     * Solution Id.
     * @nullable
     */
    solutionId?: number;
    /**
     * Responsible.
     * @nullable
     */
    responsible?: number;
    /**
     * Entered By.
     * @nullable
     */
    enteredBy?: number;
    /**
     * Entered Date.
     * @nullable
     */
    enteredDate?: Moment;
    /**
     * Effort.
     * @nullable
     */
    effort?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[PmsOpenIssueData.build]] instead.
 */
export declare function createPmsOpenIssueData(json: any): PmsOpenIssueData;
/**
 * PmsOpenIssueDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PmsOpenIssueDataField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PmsOpenIssueData> {
    /**
     * Representation of the [[PmsOpenIssueData.lineId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsOpenIssueData.stageId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    stageId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsOpenIssueData.area]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    area: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsOpenIssueData.priority]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    priority: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsOpenIssueData.remarks]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    remarks: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PmsOpenIssueData.closed]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    closed: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[PmsOpenIssueData.solutionId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    solutionId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsOpenIssueData.responsible]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    responsible: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsOpenIssueData.enteredBy]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    enteredBy: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsOpenIssueData.enteredDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    enteredDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[PmsOpenIssueData.effort]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    effort: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of PmsOpenIssueDataField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace PmsOpenIssueData {
    /**
     * Metadata information on all properties of the `PmsOpenIssueData` complex type.
     */
    const _propertyMetadata: PropertyMetadata<PmsOpenIssueData>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): PmsOpenIssueData;
}
//# sourceMappingURL=PmsOpenIssueData.d.ts.map
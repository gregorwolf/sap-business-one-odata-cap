import { Moment } from 'moment';
import { ResourceCapacityTypeEnum } from './ResourceCapacityTypeEnum';
import { ResourceCapacitySourceTypeEnum } from './ResourceCapacitySourceTypeEnum';
import { ResourceCapacityBaseTypeEnum } from './ResourceCapacityBaseTypeEnum';
import { ResourceCapacityActionEnum } from './ResourceCapacityActionEnum';
import { ResourceCapacityOwningTypeEnum } from './ResourceCapacityOwningTypeEnum';
import { ResourceCapacityRevertedTypeEnum } from './ResourceCapacityRevertedTypeEnum';
import { ResourceCapacityMemoSourceEnum } from './ResourceCapacityMemoSourceEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ResourceCapacityParams
 */
export interface ResourceCapacityParams {
    /**
     * Id.
     * @nullable
     */
    id?: number;
    /**
     * Code.
     * @nullable
     */
    code?: string;
    /**
     * Warehouse.
     * @nullable
     */
    warehouse?: string;
    /**
     * Date.
     * @nullable
     */
    date?: Moment;
    /**
     * Type.
     * @nullable
     */
    type?: ResourceCapacityTypeEnum;
    /**
     * Capacity.
     * @nullable
     */
    capacity?: number;
    /**
     * Source Type.
     * @nullable
     */
    sourceType?: ResourceCapacitySourceTypeEnum;
    /**
     * Source Entry.
     * @nullable
     */
    sourceEntry?: number;
    /**
     * Source Line Num.
     * @nullable
     */
    sourceLineNum?: number;
    /**
     * Base Type.
     * @nullable
     */
    baseType?: ResourceCapacityBaseTypeEnum;
    /**
     * Base Entry.
     * @nullable
     */
    baseEntry?: number;
    /**
     * Base Line Num.
     * @nullable
     */
    baseLineNum?: number;
    /**
     * Action.
     * @nullable
     */
    action?: ResourceCapacityActionEnum;
    /**
     * Owning Type.
     * @nullable
     */
    owningType?: ResourceCapacityOwningTypeEnum;
    /**
     * Owning Entry.
     * @nullable
     */
    owningEntry?: number;
    /**
     * Owning Line Num.
     * @nullable
     */
    owningLineNum?: number;
    /**
     * Reverted Type.
     * @nullable
     */
    revertedType?: ResourceCapacityRevertedTypeEnum;
    /**
     * Reverted Entry.
     * @nullable
     */
    revertedEntry?: number;
    /**
     * Reverted Line Num.
     * @nullable
     */
    revertedLineNum?: number;
    /**
     * Memo Source.
     * @nullable
     */
    memoSource?: ResourceCapacityMemoSourceEnum;
    /**
     * Memo.
     * @nullable
     */
    memo?: string;
    /**
     * Single Run Capacity.
     * @nullable
     */
    singleRunCapacity?: number;
    /**
     * Single Run Memo Source.
     * @nullable
     */
    singleRunMemoSource?: ResourceCapacityMemoSourceEnum;
    /**
     * Single Run Memo.
     * @nullable
     */
    singleRunMemo?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ResourceCapacityParams.build]] instead.
 */
export declare function createResourceCapacityParams(json: any): ResourceCapacityParams;
/**
 * ResourceCapacityParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ResourceCapacityParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ResourceCapacityParams> {
    /**
     * Representation of the [[ResourceCapacityParams.id]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    id: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ResourceCapacityParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ResourceCapacityParams.warehouse]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    warehouse: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ResourceCapacityParams.date]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    date: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[ResourceCapacityParams.type]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    type: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ResourceCapacityParams.capacity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    capacity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ResourceCapacityParams.sourceType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sourceType: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ResourceCapacityParams.sourceEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sourceEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ResourceCapacityParams.sourceLineNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sourceLineNum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ResourceCapacityParams.baseType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseType: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ResourceCapacityParams.baseEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ResourceCapacityParams.baseLineNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseLineNum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ResourceCapacityParams.action]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    action: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ResourceCapacityParams.owningType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    owningType: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ResourceCapacityParams.owningEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    owningEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ResourceCapacityParams.owningLineNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    owningLineNum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ResourceCapacityParams.revertedType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    revertedType: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ResourceCapacityParams.revertedEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    revertedEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ResourceCapacityParams.revertedLineNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    revertedLineNum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ResourceCapacityParams.memoSource]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    memoSource: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ResourceCapacityParams.memo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    memo: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ResourceCapacityParams.singleRunCapacity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    singleRunCapacity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ResourceCapacityParams.singleRunMemoSource]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    singleRunMemoSource: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ResourceCapacityParams.singleRunMemo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    singleRunMemo: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of ResourceCapacityParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ResourceCapacityParams {
    /**
     * Metadata information on all properties of the `ResourceCapacityParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ResourceCapacityParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ResourceCapacityParams;
}
//# sourceMappingURL=ResourceCapacityParams.d.ts.map
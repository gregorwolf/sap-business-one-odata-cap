/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ResourceCapacityTypeEnum } from './ResourceCapacityTypeEnum';
import { ResourceCapacitySourceTypeEnum } from './ResourceCapacitySourceTypeEnum';
import { ResourceCapacityBaseTypeEnum } from './ResourceCapacityBaseTypeEnum';
import { ResourceCapacityActionEnum } from './ResourceCapacityActionEnum';
import { ResourceCapacityOwningTypeEnum } from './ResourceCapacityOwningTypeEnum';
import { ResourceCapacityRevertedTypeEnum } from './ResourceCapacityRevertedTypeEnum';
import { ResourceCapacityMemoSourceEnum } from './ResourceCapacityMemoSourceEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export function createResourceCapacityParams(json: any): ResourceCapacityParams {
  return ResourceCapacityParams.build(json);
}

/**
 * ResourceCapacityParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ResourceCapacityParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ResourceCapacityParams> {
  /**
   * Representation of the [[ResourceCapacityParams.id]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  id: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Id', this, 'Edm.Int32');
  /**
   * Representation of the [[ResourceCapacityParams.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Code', this, 'Edm.String');
  /**
   * Representation of the [[ResourceCapacityParams.warehouse]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  warehouse: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Warehouse', this, 'Edm.String');
  /**
   * Representation of the [[ResourceCapacityParams.date]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  date: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('Date', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[ResourceCapacityParams.type]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  type: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Type', this);
  /**
   * Representation of the [[ResourceCapacityParams.capacity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  capacity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Capacity', this, 'Edm.Double');
  /**
   * Representation of the [[ResourceCapacityParams.sourceType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sourceType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('SourceType', this);
  /**
   * Representation of the [[ResourceCapacityParams.sourceEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sourceEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SourceEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[ResourceCapacityParams.sourceLineNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sourceLineNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SourceLineNum', this, 'Edm.Int32');
  /**
   * Representation of the [[ResourceCapacityParams.baseType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('BaseType', this);
  /**
   * Representation of the [[ResourceCapacityParams.baseEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[ResourceCapacityParams.baseLineNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseLineNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseLineNum', this, 'Edm.Int32');
  /**
   * Representation of the [[ResourceCapacityParams.action]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  action: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Action', this);
  /**
   * Representation of the [[ResourceCapacityParams.owningType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  owningType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('OwningType', this);
  /**
   * Representation of the [[ResourceCapacityParams.owningEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  owningEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('OwningEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[ResourceCapacityParams.owningLineNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  owningLineNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('OwningLineNum', this, 'Edm.Int32');
  /**
   * Representation of the [[ResourceCapacityParams.revertedType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  revertedType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('RevertedType', this);
  /**
   * Representation of the [[ResourceCapacityParams.revertedEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  revertedEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RevertedEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[ResourceCapacityParams.revertedLineNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  revertedLineNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RevertedLineNum', this, 'Edm.Int32');
  /**
   * Representation of the [[ResourceCapacityParams.memoSource]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  memoSource: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('MemoSource', this);
  /**
   * Representation of the [[ResourceCapacityParams.memo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  memo: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Memo', this, 'Edm.String');
  /**
   * Representation of the [[ResourceCapacityParams.singleRunCapacity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  singleRunCapacity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SingleRunCapacity', this, 'Edm.Double');
  /**
   * Representation of the [[ResourceCapacityParams.singleRunMemoSource]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  singleRunMemoSource: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('SingleRunMemoSource', this);
  /**
   * Representation of the [[ResourceCapacityParams.singleRunMemo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  singleRunMemo: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('SingleRunMemo', this, 'Edm.String');

  /**
   * Creates an instance of ResourceCapacityParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ResourceCapacityParams);
  }
}

export namespace ResourceCapacityParams {
  /**
   * Metadata information on all properties of the `ResourceCapacityParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ResourceCapacityParams>[] = [{
    originalName: 'Id',
    name: 'id',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Code',
    name: 'code',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Warehouse',
    name: 'warehouse',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Date',
    name: 'date',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'Type',
    name: 'type',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'Capacity',
    name: 'capacity',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'SourceType',
    name: 'sourceType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'SourceEntry',
    name: 'sourceEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'SourceLineNum',
    name: 'sourceLineNum',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'BaseType',
    name: 'baseType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'BaseEntry',
    name: 'baseEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'BaseLineNum',
    name: 'baseLineNum',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Action',
    name: 'action',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'OwningType',
    name: 'owningType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'OwningEntry',
    name: 'owningEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'OwningLineNum',
    name: 'owningLineNum',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'RevertedType',
    name: 'revertedType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'RevertedEntry',
    name: 'revertedEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'RevertedLineNum',
    name: 'revertedLineNum',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'MemoSource',
    name: 'memoSource',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'Memo',
    name: 'memo',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'SingleRunCapacity',
    name: 'singleRunCapacity',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'SingleRunMemoSource',
    name: 'singleRunMemoSource',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'SingleRunMemo',
    name: 'singleRunMemo',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ResourceCapacityParams {
    return deserializeComplexTypeV4(json, ResourceCapacityParams);
  }
}

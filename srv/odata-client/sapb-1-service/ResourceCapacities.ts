/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ResourceCapacitiesRequestBuilder } from './ResourceCapacitiesRequestBuilder';
import { Moment } from 'moment';
import { ResourceCapacityTypeEnum } from './ResourceCapacityTypeEnum';
import { ResourceCapacitySourceTypeEnum } from './ResourceCapacitySourceTypeEnum';
import { ResourceCapacityBaseTypeEnum } from './ResourceCapacityBaseTypeEnum';
import { ResourceCapacityActionEnum } from './ResourceCapacityActionEnum';
import { ResourceCapacityOwningTypeEnum } from './ResourceCapacityOwningTypeEnum';
import { ResourceCapacityRevertedTypeEnum } from './ResourceCapacityRevertedTypeEnum';
import { ResourceCapacityMemoSourceEnum } from './ResourceCapacityMemoSourceEnum';
import { AllFields, CustomFieldV4, DateField, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "ResourceCapacities" of service "SAPB1".
 */
export class ResourceCapacities extends EntityV4 implements ResourceCapacitiesType {
  /**
   * Technical entity name for ResourceCapacities.
   */
  static _entityName = 'ResourceCapacities';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
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
  /**
   * One-to-one navigation property to the [[Resources]] entity.
   */
  resource!: Resources;
  /**
   * One-to-one navigation property to the [[Warehouses]] entity.
   */
  warehouse2!: Warehouses;

  /**
   * Returns an entity builder to construct instances of `ResourceCapacities`.
   * @returns A builder that constructs instances of entity type `ResourceCapacities`.
   */
  static builder(): EntityBuilderType<ResourceCapacities, ResourceCapacitiesType> {
    return EntityV4.entityBuilder(ResourceCapacities);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ResourceCapacities` entity type.
   * @returns A `ResourceCapacities` request builder.
   */
  static requestBuilder(): ResourceCapacitiesRequestBuilder {
    return new ResourceCapacitiesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ResourceCapacities`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ResourceCapacities`.
   */
  static customField(fieldName: string): CustomFieldV4<ResourceCapacities> {
    return EntityV4.customFieldSelector(fieldName, ResourceCapacities);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { Resources, ResourcesType } from './Resources';
import { Warehouses, WarehousesType } from './Warehouses';

export interface ResourceCapacitiesType {
  id?: number | null;
  code?: string | null;
  warehouse?: string | null;
  date?: Moment | null;
  type?: ResourceCapacityTypeEnum | null;
  capacity?: number | null;
  sourceType?: ResourceCapacitySourceTypeEnum | null;
  sourceEntry?: number | null;
  sourceLineNum?: number | null;
  baseType?: ResourceCapacityBaseTypeEnum | null;
  baseEntry?: number | null;
  baseLineNum?: number | null;
  action?: ResourceCapacityActionEnum | null;
  owningType?: ResourceCapacityOwningTypeEnum | null;
  owningEntry?: number | null;
  owningLineNum?: number | null;
  revertedType?: ResourceCapacityRevertedTypeEnum | null;
  revertedEntry?: number | null;
  revertedLineNum?: number | null;
  memoSource?: ResourceCapacityMemoSourceEnum | null;
  memo?: string | null;
  singleRunCapacity?: number | null;
  singleRunMemoSource?: ResourceCapacityMemoSourceEnum | null;
  singleRunMemo?: string | null;
  resource: ResourcesType;
  warehouse2: WarehousesType;
}

export namespace ResourceCapacities {
  /**
   * Static representation of the [[id]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ID: NumberField<ResourceCapacities> = new NumberField('Id', ResourceCapacities, 'Edm.Int32');
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<ResourceCapacities> = new StringField('Code', ResourceCapacities, 'Edm.String');
  /**
   * Static representation of the [[warehouse]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WAREHOUSE: StringField<ResourceCapacities> = new StringField('Warehouse', ResourceCapacities, 'Edm.String');
  /**
   * Static representation of the [[date]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATE: DateField<ResourceCapacities> = new DateField('Date', ResourceCapacities, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[type]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE: EnumField<ResourceCapacities> = new EnumField('Type', ResourceCapacities);
  /**
   * Static representation of the [[capacity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CAPACITY: NumberField<ResourceCapacities> = new NumberField('Capacity', ResourceCapacities, 'Edm.Double');
  /**
   * Static representation of the [[sourceType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOURCE_TYPE: EnumField<ResourceCapacities> = new EnumField('SourceType', ResourceCapacities);
  /**
   * Static representation of the [[sourceEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOURCE_ENTRY: NumberField<ResourceCapacities> = new NumberField('SourceEntry', ResourceCapacities, 'Edm.Int32');
  /**
   * Static representation of the [[sourceLineNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOURCE_LINE_NUM: NumberField<ResourceCapacities> = new NumberField('SourceLineNum', ResourceCapacities, 'Edm.Int32');
  /**
   * Static representation of the [[baseType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASE_TYPE: EnumField<ResourceCapacities> = new EnumField('BaseType', ResourceCapacities);
  /**
   * Static representation of the [[baseEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASE_ENTRY: NumberField<ResourceCapacities> = new NumberField('BaseEntry', ResourceCapacities, 'Edm.Int32');
  /**
   * Static representation of the [[baseLineNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASE_LINE_NUM: NumberField<ResourceCapacities> = new NumberField('BaseLineNum', ResourceCapacities, 'Edm.Int32');
  /**
   * Static representation of the [[action]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTION: EnumField<ResourceCapacities> = new EnumField('Action', ResourceCapacities);
  /**
   * Static representation of the [[owningType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OWNING_TYPE: EnumField<ResourceCapacities> = new EnumField('OwningType', ResourceCapacities);
  /**
   * Static representation of the [[owningEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OWNING_ENTRY: NumberField<ResourceCapacities> = new NumberField('OwningEntry', ResourceCapacities, 'Edm.Int32');
  /**
   * Static representation of the [[owningLineNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OWNING_LINE_NUM: NumberField<ResourceCapacities> = new NumberField('OwningLineNum', ResourceCapacities, 'Edm.Int32');
  /**
   * Static representation of the [[revertedType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REVERTED_TYPE: EnumField<ResourceCapacities> = new EnumField('RevertedType', ResourceCapacities);
  /**
   * Static representation of the [[revertedEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REVERTED_ENTRY: NumberField<ResourceCapacities> = new NumberField('RevertedEntry', ResourceCapacities, 'Edm.Int32');
  /**
   * Static representation of the [[revertedLineNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REVERTED_LINE_NUM: NumberField<ResourceCapacities> = new NumberField('RevertedLineNum', ResourceCapacities, 'Edm.Int32');
  /**
   * Static representation of the [[memoSource]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MEMO_SOURCE: EnumField<ResourceCapacities> = new EnumField('MemoSource', ResourceCapacities);
  /**
   * Static representation of the [[memo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MEMO: StringField<ResourceCapacities> = new StringField('Memo', ResourceCapacities, 'Edm.String');
  /**
   * Static representation of the [[singleRunCapacity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SINGLE_RUN_CAPACITY: NumberField<ResourceCapacities> = new NumberField('SingleRunCapacity', ResourceCapacities, 'Edm.Double');
  /**
   * Static representation of the [[singleRunMemoSource]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SINGLE_RUN_MEMO_SOURCE: EnumField<ResourceCapacities> = new EnumField('SingleRunMemoSource', ResourceCapacities);
  /**
   * Static representation of the [[singleRunMemo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SINGLE_RUN_MEMO: StringField<ResourceCapacities> = new StringField('SingleRunMemo', ResourceCapacities, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[resource]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESOURCE: OneToOneLink<ResourceCapacities, Resources> = new OneToOneLink('Resource', ResourceCapacities, Resources);
  /**
   * Static representation of the one-to-one navigation property [[warehouse2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WAREHOUSE_2: OneToOneLink<ResourceCapacities, Warehouses> = new OneToOneLink('Warehouse2', ResourceCapacities, Warehouses);
  /**
   * All fields of the ResourceCapacities entity.
   */
  export const _allFields: Array<NumberField<ResourceCapacities> | StringField<ResourceCapacities> | DateField<ResourceCapacities> | EnumField<ResourceCapacities> | OneToOneLink<ResourceCapacities, Resources> | OneToOneLink<ResourceCapacities, Warehouses>> = [
    ResourceCapacities.ID,
    ResourceCapacities.CODE,
    ResourceCapacities.WAREHOUSE,
    ResourceCapacities.DATE,
    ResourceCapacities.TYPE,
    ResourceCapacities.CAPACITY,
    ResourceCapacities.SOURCE_TYPE,
    ResourceCapacities.SOURCE_ENTRY,
    ResourceCapacities.SOURCE_LINE_NUM,
    ResourceCapacities.BASE_TYPE,
    ResourceCapacities.BASE_ENTRY,
    ResourceCapacities.BASE_LINE_NUM,
    ResourceCapacities.ACTION,
    ResourceCapacities.OWNING_TYPE,
    ResourceCapacities.OWNING_ENTRY,
    ResourceCapacities.OWNING_LINE_NUM,
    ResourceCapacities.REVERTED_TYPE,
    ResourceCapacities.REVERTED_ENTRY,
    ResourceCapacities.REVERTED_LINE_NUM,
    ResourceCapacities.MEMO_SOURCE,
    ResourceCapacities.MEMO,
    ResourceCapacities.SINGLE_RUN_CAPACITY,
    ResourceCapacities.SINGLE_RUN_MEMO_SOURCE,
    ResourceCapacities.SINGLE_RUN_MEMO,
    ResourceCapacities.RESOURCE,
    ResourceCapacities.WAREHOUSE_2
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<ResourceCapacities> = new AllFields('*', ResourceCapacities);
  /**
   * All key fields of the ResourceCapacities entity.
   */
  export const _keyFields: Array<Field<ResourceCapacities>> = [ResourceCapacities.ID];
  /**
   * Mapping of all key field names to the respective static field property ResourceCapacities.
   */
  export const _keys: { [keys: string]: Field<ResourceCapacities> } = ResourceCapacities._keyFields.reduce((acc: { [keys: string]: Field<ResourceCapacities> }, field: Field<ResourceCapacities>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}

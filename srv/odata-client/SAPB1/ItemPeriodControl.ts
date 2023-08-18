/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
import {
  CollectionField,
  ComplexTypeField,
  ConstructorOrField,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  EdmTypeField,
  Entity,
  EnumField,
  FieldBuilder,
  FieldOptions,
  OrderableEdmTypeField,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v4';

/**
 * ItemPeriodControl
 */
export interface ItemPeriodControl<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Fiscal Year.
   * @nullable
   */
  fiscalYear?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Depreciation Area.
   * @nullable
   */
  depreciationArea?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Sub Period.
   * @nullable
   */
  subPeriod?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Depreciation Status.
   * @nullable
   */
  depreciationStatus?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Factor.
   * @nullable
   */
  factor?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Actual Units.
   * @nullable
   */
  actualUnits?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * ItemPeriodControlField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ItemPeriodControlField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ItemPeriodControl,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ItemPeriodControl.fiscalYear} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fiscalYear: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FiscalYear', 'Edm.String', true);
  /**
   * Representation of the {@link ItemPeriodControl.depreciationArea} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  depreciationArea: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DepreciationArea',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ItemPeriodControl.subPeriod} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  subPeriod: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SubPeriod', 'Edm.Int32', true);
  /**
   * Representation of the {@link ItemPeriodControl.depreciationStatus} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  depreciationStatus: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'DepreciationStatus',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link ItemPeriodControl.factor} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  factor: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Factor', 'Edm.Double', true);
  /**
   * Representation of the {@link ItemPeriodControl.actualUnits} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  actualUnits: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ActualUnits', 'Edm.Int32', true);

  /**
   * Creates an instance of ItemPeriodControlField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, ItemPeriodControl, fieldOptions);
  }
}

export namespace ItemPeriodControl {
  /**
   * Metadata information on all properties of the `ItemPeriodControl` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ItemPeriodControl>[] = [
    {
      originalName: 'FiscalYear',
      name: 'fiscalYear',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DepreciationArea',
      name: 'depreciationArea',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'SubPeriod',
      name: 'subPeriod',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'DepreciationStatus',
      name: 'depreciationStatus',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'Factor',
      name: 'factor',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'ActualUnits',
      name: 'actualUnits',
      type: 'Edm.Int32',
      isCollection: false
    }
  ];
}

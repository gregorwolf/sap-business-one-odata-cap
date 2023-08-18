/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TaxCodeDeterminationTcdDefaultWtTypeEnum } from './TaxCodeDeterminationTcdDefaultWtTypeEnum';
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
 * TaxCodeDeterminationTcdDefaultWt
 */
export interface TaxCodeDeterminationTcdDefaultWt<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Abs Id.
   * @nullable
   */
  absId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Wt Code.
   * @nullable
   */
  wtCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Type.
   * @nullable
   */
  type?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
}

/**
 * TaxCodeDeterminationTcdDefaultWtField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class TaxCodeDeterminationTcdDefaultWtField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  TaxCodeDeterminationTcdDefaultWt,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link TaxCodeDeterminationTcdDefaultWt.absId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AbsId', 'Edm.Int32', true);
  /**
   * Representation of the {@link TaxCodeDeterminationTcdDefaultWt.wtCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wtCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('WTCode', 'Edm.String', true);
  /**
   * Representation of the {@link TaxCodeDeterminationTcdDefaultWt.type} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  type: EnumField<
    EntityT,
    DeSerializersT,
    TaxCodeDeterminationTcdDefaultWtTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'Type',
    TaxCodeDeterminationTcdDefaultWtTypeEnum,
    true
  );

  /**
   * Creates an instance of TaxCodeDeterminationTcdDefaultWtField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(
      fieldName,
      fieldOf,
      deSerializers,
      TaxCodeDeterminationTcdDefaultWt,
      fieldOptions
    );
  }
}

export namespace TaxCodeDeterminationTcdDefaultWt {
  /**
   * Metadata information on all properties of the `TaxCodeDeterminationTcdDefaultWt` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<TaxCodeDeterminationTcdDefaultWt>[] =
    [
      {
        originalName: 'AbsId',
        name: 'absId',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'WTCode',
        name: 'wtCode',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'Type',
        name: 'type',
        type: 'Edm.Enum',
        isCollection: false
      }
    ];
}

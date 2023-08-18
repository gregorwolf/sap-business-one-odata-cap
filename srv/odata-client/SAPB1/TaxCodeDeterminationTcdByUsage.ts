/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TaxCodeDeterminationTcdByUsageTypeEnum } from './TaxCodeDeterminationTcdByUsageTypeEnum';
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
 * TaxCodeDeterminationTcdByUsage
 */
export interface TaxCodeDeterminationTcdByUsage<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Abs Id.
   * @nullable
   */
  absId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Usage Code.
   * @nullable
   */
  usageCode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Tax Code.
   * @nullable
   */
  taxCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Exp Tax Code.
   * @nullable
   */
  expTaxCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Type.
   * @nullable
   */
  type?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Pur Tax Code.
   * @nullable
   */
  purTaxCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * TaxCodeDeterminationTcdByUsageField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class TaxCodeDeterminationTcdByUsageField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  TaxCodeDeterminationTcdByUsage,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link TaxCodeDeterminationTcdByUsage.absId} property for query construction.
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
   * Representation of the {@link TaxCodeDeterminationTcdByUsage.usageCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  usageCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('UsageCode', 'Edm.Int32', true);
  /**
   * Representation of the {@link TaxCodeDeterminationTcdByUsage.taxCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxCode', 'Edm.String', true);
  /**
   * Representation of the {@link TaxCodeDeterminationTcdByUsage.expTaxCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  expTaxCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ExpTaxCode', 'Edm.String', true);
  /**
   * Representation of the {@link TaxCodeDeterminationTcdByUsage.type} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  type: EnumField<
    EntityT,
    DeSerializersT,
    TaxCodeDeterminationTcdByUsageTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'Type',
    TaxCodeDeterminationTcdByUsageTypeEnum,
    true
  );
  /**
   * Representation of the {@link TaxCodeDeterminationTcdByUsage.purTaxCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  purTaxCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PurTaxCode', 'Edm.String', true);

  /**
   * Creates an instance of TaxCodeDeterminationTcdByUsageField.
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
      TaxCodeDeterminationTcdByUsage,
      fieldOptions
    );
  }
}

export namespace TaxCodeDeterminationTcdByUsage {
  /**
   * Metadata information on all properties of the `TaxCodeDeterminationTcdByUsage` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<TaxCodeDeterminationTcdByUsage>[] =
    [
      {
        originalName: 'AbsId',
        name: 'absId',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'UsageCode',
        name: 'usageCode',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'TaxCode',
        name: 'taxCode',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'ExpTaxCode',
        name: 'expTaxCode',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'Type',
        name: 'type',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'PurTaxCode',
        name: 'purTaxCode',
        type: 'Edm.String',
        isCollection: false
      }
    ];
}

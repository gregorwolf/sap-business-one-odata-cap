/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
 * ElectronicReportInfo
 */
export interface ElectronicReportInfo<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Share Capital Amount.
   * @nullable
   */
  shareCapitalAmount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Company Type.
   * @nullable
   */
  companyType?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * ElectronicReportInfoField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ElectronicReportInfoField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ElectronicReportInfo,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ElectronicReportInfo.shareCapitalAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shareCapitalAmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ShareCapitalAmount',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link ElectronicReportInfo.companyType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  companyType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CompanyType', 'Edm.String', true);

  /**
   * Creates an instance of ElectronicReportInfoField.
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
      ElectronicReportInfo,
      fieldOptions
    );
  }
}

export namespace ElectronicReportInfo {
  /**
   * Metadata information on all properties of the `ElectronicReportInfo` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ElectronicReportInfo>[] = [
    {
      originalName: 'ShareCapitalAmount',
      name: 'shareCapitalAmount',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'CompanyType',
      name: 'companyType',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}

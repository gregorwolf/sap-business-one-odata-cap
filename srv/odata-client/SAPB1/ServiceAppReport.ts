/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MobileAppReportChoiceEnum } from './MobileAppReportChoiceEnum';
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
 * ServiceAppReport
 */
export interface ServiceAppReport<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Code.
   * @nullable
   */
  code?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * System Report Name.
   * @nullable
   */
  systemReportName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Customized Report Name.
   * @nullable
   */
  customizedReportName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Report Choice.
   * @nullable
   */
  reportChoice?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
}

/**
 * ServiceAppReportField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ServiceAppReportField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ServiceAppReport,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ServiceAppReport.code} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Code', 'Edm.Int32', true);
  /**
   * Representation of the {@link ServiceAppReport.systemReportName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  systemReportName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'SystemReportName',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ServiceAppReport.customizedReportName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  customizedReportName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CustomizedReportName',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ServiceAppReport.reportChoice} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reportChoice: EnumField<
    EntityT,
    DeSerializersT,
    MobileAppReportChoiceEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'ReportChoice',
    MobileAppReportChoiceEnum,
    true
  );

  /**
   * Creates an instance of ServiceAppReportField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, ServiceAppReport, fieldOptions);
  }
}

export namespace ServiceAppReport {
  /**
   * Metadata information on all properties of the `ServiceAppReport` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ServiceAppReport>[] = [
    {
      originalName: 'Code',
      name: 'code',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'SystemReportName',
      name: 'systemReportName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CustomizedReportName',
      name: 'customizedReportName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ReportChoice',
      name: 'reportChoice',
      type: 'Edm.Enum',
      isCollection: false
    }
  ];
}

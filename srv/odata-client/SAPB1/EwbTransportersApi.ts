/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EwbTransporters } from './EwbTransporters';
import { EwbTransportersRequestBuilder } from './EwbTransportersRequestBuilder';
import { BusinessPartnersApi } from './BusinessPartnersApi';
import { EwbTransporterLine } from './EwbTransporterLine';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  CollectionField,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class EwbTransportersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<EwbTransporters<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): EwbTransportersApi<DeSerializersT> {
    return new EwbTransportersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link businessPartners} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNERS: OneToManyLink<
      EwbTransporters<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [BusinessPartnersApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      BUSINESS_PARTNERS: new OneToManyLink(
        'BusinessPartners',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = EwbTransporters;

  requestBuilder(): EwbTransportersRequestBuilder<DeSerializersT> {
    return new EwbTransportersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    EwbTransporters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<EwbTransporters<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<EwbTransporters<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof EwbTransporters, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EwbTransporters,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ABS_ENTRY: OrderableEdmTypeField<
      EwbTransporters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TRANSPORTER_CODE: OrderableEdmTypeField<
      EwbTransporters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORTER_NAME: OrderableEdmTypeField<
      EwbTransporters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORTER_ID: OrderableEdmTypeField<
      EwbTransporters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EWB_TRANSPORTER_LINES: CollectionField<
      EwbTransporters<DeSerializers>,
      DeSerializersT,
      EwbTransporterLine,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessPartners} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNERS: OneToManyLink<
      EwbTransporters<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<EwbTransporters<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link absEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ABS_ENTRY: fieldBuilder.buildEdmTypeField(
          'AbsEntry',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link transporterCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTER_CODE: fieldBuilder.buildEdmTypeField(
          'TransporterCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transporterName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTER_NAME: fieldBuilder.buildEdmTypeField(
          'TransporterName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transporterId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTER_ID: fieldBuilder.buildEdmTypeField(
          'TransporterID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ewbTransporterLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EWB_TRANSPORTER_LINES: fieldBuilder.buildCollectionField(
          'EWBTransporter_Lines',
          EwbTransporterLine,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EwbTransporters)
      };
    }

    return this._schema;
  }
}

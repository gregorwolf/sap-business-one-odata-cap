/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ProductTreeStage
 */
export interface ProductTreeStage {
  /**
   * Father.
   * @nullable
   */
  father?: string;
  /**
   * Stage Id.
   * @nullable
   */
  stageId?: number;
  /**
   * Sequence Number.
   * @nullable
   */
  sequenceNumber?: number;
  /**
   * Stage Entry.
   * @nullable
   */
  stageEntry?: number;
  /**
   * Name.
   * @nullable
   */
  name?: string;
  /**
   * Waiting Days.
   * @nullable
   */
  waitingDays?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[ProductTreeStage.build]] instead.
 */
export function createProductTreeStage(json: any): ProductTreeStage {
  return ProductTreeStage.build(json);
}

/**
 * ProductTreeStageField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ProductTreeStageField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ProductTreeStage> {
  /**
   * Representation of the [[ProductTreeStage.father]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  father: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Father', this, 'Edm.String');
  /**
   * Representation of the [[ProductTreeStage.stageId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stageId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('StageID', this, 'Edm.Int32');
  /**
   * Representation of the [[ProductTreeStage.sequenceNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sequenceNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SequenceNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[ProductTreeStage.stageEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stageEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('StageEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[ProductTreeStage.name]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Name', this, 'Edm.String');
  /**
   * Representation of the [[ProductTreeStage.waitingDays]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  waitingDays: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('WaitingDays', this, 'Edm.Double');

  /**
   * Creates an instance of ProductTreeStageField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ProductTreeStage);
  }
}

export namespace ProductTreeStage {
  /**
   * Metadata information on all properties of the `ProductTreeStage` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ProductTreeStage>[] = [{
    originalName: 'Father',
    name: 'father',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'StageID',
    name: 'stageId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'SequenceNumber',
    name: 'sequenceNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'StageEntry',
    name: 'stageEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Name',
    name: 'name',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'WaitingDays',
    name: 'waitingDays',
    type: 'Edm.Double',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ProductTreeStage {
    return deserializeComplexTypeV4(json, ProductTreeStage);
  }
}
